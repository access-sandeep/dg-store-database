import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
import { UsersDto } from './models/users.dto';
import { UserAddressDto } from './models/user_address.dto';
import { ApiTags } from '@nestjs/swagger';
import { EndpointTags } from 'src/shared/enums/controller-tags.enum';
import { Public } from 'src/guards/decorators/public';


@Controller('users')
@ApiTags(EndpointTags.User)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Public()
  @Get(':email')
  async findOne(@Param('email') email: string): Promise<User> {
    return await this.usersService.findOne(email);
  }

  @Post()
  async add(@Body() usersDto: UsersDto) {
    await this.usersService.add(usersDto);
  }

  @Put(':id')
  async put(@Param('id') id: string, @Body() usersDto: UsersDto) {
    await this.usersService.update(id, usersDto);
  }

  @Post('address')
  async attachAddress(@Body() userAddressDto: UserAddressDto) {
    await this.usersService.attachAddress(userAddressDto);
  }
}
