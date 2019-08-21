import React, { Component } from 'react';
import Client from './Contentful'


const RoomContext = React.createContext();

class RoomProvider extends Component {
    constructor(){
        super();
        this.state={
            rooms:[],
            sortedRooms:[],
            featuredRooms:[],
            loading: true,
            type:'all',
            capacity:1,
            price:0,
            minPrice:0,
            maxPrice:0,
            minSize:0,
            maxSize:0,
            breakfast:false,
            pets:false
        }
    }
    getData = async ()=>{
        try{
            let response = await Client.getEntries({
                content_type: "resort",
                order:"sys.createdAt"
          
            })
            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price))
            let maxSize = Math.max(...rooms.map(item => item.size))
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms:rooms,
                loading: false,
                price:maxPrice,
                maxPrice,
                maxSize
            })
        } 
        
        catch (err){
            console.log(err)
        }
    }
    componentDidMount() {
       this.getData()
    }

    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(img=>img.fields.file.url)
            let room = {...item.fields,images,id}
            return room
        })
        return tempItems
    }

    getRoom = (roomType)=>{
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) =>room.roomType === roomType);
        return room;
    }

    handleChange = (e)=>{
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name  = target.name;
        this.setState({
            [name]:value
        },this.filterRoom)
    };

    filterRoom = ()=>{
        let{
            rooms,type,capacity,price,minSize,maxSize,breakfast,pets
        } = this.state
        //all rooms
        let tempRooms =[...rooms]
        //transform capacity
        capacity= parseInt(capacity);
        price= parseInt(price);
        //filter type
        if(type !== 'all' ){
            tempRooms = tempRooms.filter(room => room.type === type )
        };
        if(capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        };

        tempRooms = tempRooms.filter(room => room.price <= price);
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize );

        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        };

        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true)
        };

        this.setState({
            sortedRooms:tempRooms
        })

     
       


    }
    
    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
            
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export{RoomProvider, RoomConsumer, RoomContext}

