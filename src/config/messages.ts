export const messages = {
  en: {
    authPage: {
      pageTitle: 'Auth Page',
      hello: 'Hello auth page'

    },
    loginPage: {
      pageTitle: 'Hawk - Sign in',
      hello: 'Hello login page',
      loginForm: {
        username: 'Username',
        password: 'Password',
        submit: 'Log in',
        validation: {
          username: {
            required: 'Please fill with your username',
            min: `Username must be at least {value} characters`,
            max: 'Username must be at most {value} characters'
          },
          password: {
            required: 'Please fill with your password',
            min: 'Password must be at least {value} characters',
            max: 'Password must be at most {value} characters'
          },
        },
        status: {
          200: 'Logged out successfully',
          401: 'Bad credentials',
          440: 'Session expired',
          500: 'Whoops! Something went wrong! :(',
        }
      }
    },
    registerPage: {
      pageTitle: 'Hawk - Sign up',
    },
    dashboardPage: {
      pageTitle: 'Hawk - Dashboard',
      hello: 'Hello dashboard'
    }
  },
  pl: {
    authPage: {
      pageTitle: 'Auth Page',
      hello: 'Witaj na stronie auth'

    },
    loginPage: {
      pageTitle: 'Hawk - Zaloguj się',
      hello: 'Witaj na login',
      loginForm: {
        username: 'Nazwa użytkownika',
        password: 'Hasło',
        submit: 'Zaloguj się',
        validation: {
          username: {
            required: 'Proszę podać nazwę użytkownika',
            min: `Nazwa użytkownika musi składać się z co najmniej {value} znaków`,
            max: 'Nazwa użytkownika musi mieć najwyżej {value} znaków'
          },
          password: {
            required: 'Proszę podać hasło',
            min: 'Hasło musi składać się z co najmniej {value} znaków',
            max: 'Hasło musi mieć najwyżej {value} znaków'
          },
        },
        status: {
          200: 'Wylogowano pomyślnie',
          401: 'Podałeś złe dane',
          440: 'Sesja wygasła',
          500: 'Ups! Coś poszło nie tak! :(',
        }
      }
    },
    registerPage: {
      pageTitle: 'Hawk - Zarejestruj się',
    },
    dashboardPage: {
      pageTitle: 'Hawk - Dashboard',
      hello: 'Witaj dashboard'
    }
  }
};
