import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Item} from './interfaces/item.interface'
import {Model} from 'mongoose'

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<any,Item>){}

    async findAll(): Promise<Item[]>{
        return await this.itemModel.find()
    }
    async findOne(id:String): Promise<Item>{
        return this.itemModel.findById({_id:id})
    }
    async create(item:Item):Promise<Item>{
        const newItem = new this.itemModel(item)
        return await newItem.save()
    }
    async delete(id:String):Promise<any>{
        return await this.itemModel.deleteOne({_id:id})
    }
    async update(item:Item, id:String):Promise<Item>{

        return await this.itemModel.findByIdAndUpdate(id,item,{new:true,useFindAndModify:false })
    }
}
