import "reflect-metadata";

import Init from "./init";

import AuthenticationController from "./authentication/authentication.controller";

const app = new Init([new AuthenticationController()]);

app.listen();
