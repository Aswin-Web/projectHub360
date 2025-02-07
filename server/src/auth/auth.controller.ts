/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Controller, Get, Req, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { google } from 'googleapis';
import { config } from 'src/config/config';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private configService: ConfigService,
    readonly authService: AuthService,
  ) {}
  @Get('/google')
  // @UseGuards(AuthGuard('google'))
  async googleLogin(@Res() res) {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${this.configService.get<string>('GOOGLE_CLIENT_ID')}&redirect_uri=${config().SERVER_URL + '/auth/google/cb'}&response_type=code&scope=profile email`;
    res.redirect(url);
  }

  @Get('google/cb')
  // @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    try {
      // Get OAuth tokens from authorization code
      async function getTokenFromCode(code: string) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        const { tokens } = await oauth2Client.getToken(code);
        // console.log(tokens, code);
        return tokens;
      }
      // getTokenFromCode()

      // Set OAuth tokens to the client
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      function setTokens(tokens) {
        // console.log(tokens)

        oauth2Client.setCredentials(tokens);
      }

      // Get OAuth client
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      function getOAuthClient() {
        // @ts-ignore

        return oauth2Client;
      }

      // Exchange authorization code for access token
      let oauth2Client;
      const code: string = req.query.code as string;

      const credentials = {
        client_id: config().GOOGLE_CLIENT_ID,
        client_secret: config().GOOGLE_SECRET_ID,
        redirect_uri: config().SERVER_URL, // Adjust this to your actual redirect URI
      };
      const oauth2Client1 = new google.auth.OAuth2(
        credentials.client_id,
        credentials.client_secret,
        credentials.redirect_uri + '/auth/google/cb',
      );
      oauth2Client = oauth2Client1;
      const tokens = await getTokenFromCode(code);
      setTokens(tokens);
      const oauth2 = google.oauth2({
        version: 'v2',
        // @ts-ignore

        auth: oauth2Client,
      });
      // @ts-ignore
      const {
        data,
      }: {
        data: {
          id: string;
          email: string;
          verified_email: string;
          name: string;
          given_name: string;
          family_name: string;
          picture: string;
          locale: string;
        };
      } = await oauth2.userinfo.get();
      const access_token = await this.authService.authenticateUser(
        data.email,
        data.name,
        data.picture,
      );
      // Code to handle user authentication and retrieval using the profile data
      res.redirect(
        config().CLIENT_URL + `/authenticate/?access=${access_token}`,
      );
    } catch (e) {
      console.log(e);
      return res.redirect(config().CLIENT_URL + '/error');
    }
  }
}
