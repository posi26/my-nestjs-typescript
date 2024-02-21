import { Controller, Get, Param, Post, Put, Body, Query, Delete, Patch } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getAllUsers(): User[] {
        return this.userService.getAllUsers();
    }

    @Get('by-email')
    getUserByEmail(@Query('email') email: string): User | undefined {
        return this.userService.getUserByEmail(email);
    }

    @Get(':id')
    getUser(@Param('id') id: string): User | undefined {
        return this.userService.getUserById(id);
    }

    @Post()
    createUser(@Body() body: User): void {
        const { id, name, email } = body;
        this.userService.createUser(id, name, email);
    }

    @Put(':id')
    updateUserById(
        @Param('id') id: string,
        @Body() body: User
    ): User | undefined {
        const { name, email } = body;
        return this.userService.updateUserById(id, name, email);
    }

    @Patch(':id')
    partialUpdateUserById(
        @Param('id') id: string,
        @Body() partialUser: Partial<User>
    ): User | undefined {
        return this.userService.partialUpdateUserById(id, partialUser);
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: string): void {
        this.userService.deleteUserById(id);
    }
}
