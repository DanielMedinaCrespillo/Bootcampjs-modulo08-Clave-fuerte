import {
  tieneMayusculasYMinusculas,
  validarClave,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
  commonPasswords,
} from "./validar-clave";

describe("tieneMayusculasYMinusculas", () => {
  it("Si la clave no tiene mayuscula devuelve esValida: false y un error", () => {
    //Arrange
    const clave: string = "kokytu";
    //Act
    const result = tieneMayusculasYMinusculas(clave);
    //Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toBe("La clave debe de tener mayúsculas y minúsculas");
  });

  it("Si la clave no tiene minuscula devuelve esValida: false y un error", () => {
    //Arrange
    const clave: string = "KOKYTU";
    //Act
    const result = tieneMayusculasYMinusculas(clave);
    //Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toBe("La clave debe de tener mayúsculas y minúsculas");
  });

  it("Si la clave tiene mayuscula y minuscula esValida: true", () => {
    //Arrange
    const clave: string = "Kokytu";
    //Act
    const result = tieneMayusculasYMinusculas(clave);
    //Assert
    expect(result.esValida).toBe(true);
  });
});

describe("tieneNumeros", () => {
  it("Si la clave no tiene numeros esValida: false y un error", () => {
    //Arrange
    const clave: string = "kokytu";
    //Act
    const result = tieneNumeros(clave);
    //Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toBe("La clave debe de tener números");
  });

  it("Si la clave tiene numeros esValida: true", () => {
    //Arrange
    const clave: string = "kokytu23";
    //Act
    const result = tieneNumeros(clave);
    //Assert
    expect(result.esValida).toBe(true);
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("Si la clave no tiene caracteres especiales esValida: false y un error", () => {
    //Arrange
    const clave: string = "kokytu";
    //Act
    const result = tieneCaracteresEspeciales(clave);
    //Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toBe("La clave debe de tener caracteres especiales");
  });

  it("Si la clave tiene caracteres especiales esValida: true", () => {
    //Arrange
    const clave: string = "kokytu@";
    //Act
    const result = tieneCaracteresEspeciales(clave);
    //Assert
    expect(result.esValida).toBe(true);
  });
});

describe("tieneLongitudMinima", () => {
  it("Si la clave no tiene 8 caracteres esValida: false y un error", () => {
    //Arrange
    const clave: string = "kokytu";
    //Act
    const result = tieneLongitudMinima(clave);
    //Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toBe(
      "La clave debe de tener una longitud mínima de 8 caracteres"
    );
  });

  it("Si la clave tiene 8 caracteres esValida: true", () => {
    //Arrange
    const clave: string = "kokytuhu";
    //Act
    const result = tieneLongitudMinima(clave);
    //Assert
    expect(result.esValida).toBe(true);
  });
});

describe("tieneNombreUsuario", () => {
  it("Si la clave es igual que la del usuario esValida: false y error", () => {
    //Arrange
    const clave: string = "kokytu";
    const usuario: string = "kokytu";
    //Act
    const result = tieneNombreUsuario(clave, usuario);
    //Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toBe("La clave no debe tener el nombre del usuario");
  });

  it("Si la clave es diferente a la del usuario esValida: true", () => {
    //Arrange
    const clave: string = "kokytuhu";
    const usuario: string = "lokit";
    //Act
    const result = tieneNombreUsuario(clave, usuario);
    //Assert
    expect(result.esValida).toBe(true);
  });
});

describe("tienePalabrasComunes", () => {
  it("Si la clave tiene palabras comunes esValida: false y error", () => {
    //Arrange
    const clave: string = "123abc";
    const palabraComun: string[] = ["123abc"];
    //Act
    const result = tienePalabrasComunes(clave, palabraComun);
    //Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toBe("La clave no debe de contener palabras comunes");
  });

  it("Si la clave no tiene palabras comunes esValida: true", () => {
    //Arrange
    const clave: string = "kokytuhu";
    const palabraComun: string[] = ["admin"];
    //Act
    const result = tienePalabrasComunes(clave, palabraComun);
    //Assert
    expect(result.esValida).toBe(true);
  });
});

describe("validarClave", () => {
  it("Valida la clave si tiene todas las especificaciones", () => {
    //Arrage
    const nombreUsuario = "Kyoto";
    const clave = "Doomi11@";
    //Act
    const result = validarClave(nombreUsuario, clave, commonPasswords);
    //Assert
    expect(result.esValida).toBe(true);
  });

  it("No es valida la clave si tiene todas las especificaciones", () => {
    //Arrage
    const nombreUsuario = "Kyoto";
    const clave = "doomi11@";
    //Act
    const result = validarClave(nombreUsuario, clave, commonPasswords);
    //Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toBe("La clave debe de tener mayúsculas y minúsculas");
  });

  it("No es valida la clave si tiene todas las especificaciones", () => {
    //Arrage
    const nombreUsuario = "Kyoto";
    const clave = "Doomi1@";
    //Act
    const result = validarClave(nombreUsuario, clave, commonPasswords);
    //Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toBe(
      "La clave debe de tener una longitud mínima de 8 caracteres"
    );
  });
});
