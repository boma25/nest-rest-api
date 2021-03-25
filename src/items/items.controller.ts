import { Controller, Get, Post,Put,Delete,Body,Param } from '@nestjs/common';
import {CreateItemDto} from "./dto/create-items.dto"
import {ItemsService} from './items.service'
import {Item} from './interfaces/item.interface'

@Controller('items')
export class ItemsController {
    constructor(private readonly ItemsService:ItemsService){}
    @Get()
    async findAll():Promise<Item[]>{
        return this.ItemsService.findAll()
    }
    @Get(':id')
    async findOne(@Param('id') id):Promise<Item>{
        return this.ItemsService.findOne(id)
    }
    @Post()
    async create(@Body() CreateItemDto:CreateItemDto):Promise<Item>{
        return this.ItemsService.create(CreateItemDto)
    }
    @Delete(':id')
    async delete(@Param('id') id):Promise<any>{
        return this.ItemsService.delete(id)
    }
    @Put(':id')
    async update(@Param('id') id, @Body() updateItemDto:CreateItemDto):Promise<Item>{
        return this.ItemsService.update(updateItemDto,id)
    }
}
