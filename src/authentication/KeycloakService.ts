import Keycloak from 'keycloak-js'

const keycloakInstance = new Keycloak()

interface CallbackOneParam<T1 = void, T2 = void> {
  (param1: T1): T2
}

const Login = (onAuthenticatedCallback: CallbackOneParam) => {
  keycloakInstance
    .init({ onLoad: 'login-required' })
    .then(function (authenticated) {
      authenticated ? onAuthenticatedCallback() : alert('non authenticated')
    })
    .catch((e) => {
      console.dir(e)
      console.log(`keycloak init exception: ${e}`)
    })
}

const userName = (): string | undefined => `${keycloakInstance?.tokenParsed?.given_name} ${keycloakInstance?.tokenParsed?.family_name}`

const token = (): string | undefined => keycloakInstance?.token

const logOut = () => keycloakInstance.logout()

const KeyCloakService = {
  callLogin: Login,
  getUserName: userName,
  getAccesToken: token,
  callLogOut: logOut
}

export default KeyCloakService
