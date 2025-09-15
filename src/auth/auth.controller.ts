import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up-dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in-dto';

@Controller('auth')
export class AuthController {
        constructor(private authService: AuthService) { }

    @Post('signup')
    signUp(@Body() body: SignUpDto) {
        return this.authService.signUp(body)
    }

    @Post('signin')
    signIn(@Body() body:SignInDto){
        return this.authService.signIn(body)
    }
}
