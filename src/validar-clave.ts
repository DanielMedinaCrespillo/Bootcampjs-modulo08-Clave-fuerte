import { ValidacionClave } from "./modelo";

export const commonPasswords: string[] = [
  "password",
  "123456",
  "qwerty",
  "admin",
  "letmein",
  "welcome",
  "monkey",
  "sunshine",
  "password1",
  "123456789",
  "football",
  "iloveyou",
  "1234567",
  "123123",
  "12345678",
  "abc123",
  "qwerty123",
  "1q2w3e4r",
  "baseball",
  "password123",
  "superman",
  "987654321",
  "mypass",
  "trustno1",
  "hello123",
  "dragon",
  "1234",
  "555555",
  "loveme",
  "hello",
  "hockey",
  "letmein123",
  "welcome123",
  "mustang",
  "shadow",
  "12345",
  "passw0rd",
  "abcdef",
  "123abc",
  "football123",
  "master",
  "jordan23",
  "access",
  "flower",
  "qwertyuiop",
  "admin123",
  "iloveyou123",
  "welcome1",
  "monkey123",
  "sunshine1",
  "password12",
  "1234567890",
];

const caracteresEspeciales: string[] = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  ":",
  ";",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "/",
  "?",
  "~",
  "`",
];

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const claveMayusculas = clave.toUpperCase();
  const claveMinusculas = clave.toLowerCase();

  const contieneMayusculas = clave !== claveMayusculas;
  const contieneMinusculas = clave !== claveMinusculas;

  if (!contieneMayusculas || !contieneMinusculas) {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
  }

  return {
    esValida: true,
  };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  let claveConNumeros = false;

  for (let i = 0; i < clave.length; i++) {
    if (!isNaN(Number(clave[i]))) {
      claveConNumeros = true;
      break;
    }
  }

  if (!claveConNumeros) {
    return {
      esValida: false,
      error: "La clave debe de tener números",
    };
  }

  return {
    esValida: true,
  };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  let claveEspecial = false;

  for (let i = 0; i < clave.length; i++) {
    if (caracteresEspeciales.includes(clave[i])) {
      claveEspecial = true;
      break;
    }
  }

  if (!claveEspecial) {
    return {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
  }

  return {
    esValida: true,
  };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length < 8) {
    return {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
  }
  return {
    esValida: true,
  };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (clave === nombreUsuario) {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
  }
  return {
    esValida: true,
  };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (commonPasswords.includes(clave)) {
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
  }
  return {
    esValida: true,
  };
};

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const validaciones = [
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords),
  ];

  const buscaError = validaciones.find((v) => !v.esValida);

  if (buscaError) {
    return buscaError;
  }

  return { esValida: true };
};
