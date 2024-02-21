// src/services/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    private readonly users: User[] = [];

    getAllUsers(): User[] {
        return this.users;
    }

    getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }

    getUserById(id: string): User | undefined {
        return this.users.find(user => user.id === id);
    }

    createUser(id: string, name: string, email: string): void {
        const user: User = { id, name, email };
        this.users.push(user);
    }

    updateUserById(id: string, name: string, email: string): User | undefined {
        const userIndex = this.users.findIndex(user => user.id === id);

        if (userIndex !== -1) {
            this.users[userIndex] = { id, name, email };
            return this.users[userIndex];
        } else {
            throw new NotFoundException(`User with ID ${id} not found.`);
        }
    }

    partialUpdateUserById(id: string, partialUser: Partial<User>): User | undefined {
        const userIndex = this.users.findIndex(user => user.id === id);

        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...partialUser };
            return this.users[userIndex];
        } else {
            throw new NotFoundException(`User with ID ${id} not found.`);
        }
    }

    deleteUserById(id: string): void {
        const userIndex = this.users.findIndex(user => user.id === id);

        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
        } else {
            throw new NotFoundException(`User with ID ${id} not found.`);
        }
    }

}
