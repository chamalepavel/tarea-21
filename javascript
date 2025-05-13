tarea 21

/* En este código, tenemos un objeto llamado systemBot
   que representa un robot con sensores.
   Actualmente solo podemos leer el número de sensores,
   pero no podemos modificarlo.
   Vamos a resolver esto paso por paso. */

// Paso 1: Creamos un nuevo objeto y añadimos un getter.
// También declaramos el setter, pero vacío por ahora.

const systemBot1 = {
  specs: {
    model: '1E78V2',
    energy: 100,
    sensors: 15
  },
  get totalSensors() {
    return typeof this.specs.sensors === 'number'
      ? this.specs.sensors
      : 'Sensor data unavailable.';
  },
  set totalSensors(value) {
    // Paso 1: aún vacío
  }
};

// Paso 2: Añadimos validaciones al setter para verificar si el valor es un número >= 0

const systemBot2 = {
  specs: {
    model: '1E78V2',
    energy: 100,
    sensors: 15
  },
  get totalSensors() {
    return typeof this.specs.sensors === 'number'
      ? this.specs.sensors
      : 'Sensor data unavailable.';
  },
  set totalSensors(value) {
    if (typeof value === 'number' && value >= 0) {
      this.specs.sensors = value;
    }
  }
};

// Paso 3: Añadimos el mensaje de error si la validación falla

const systemBot3 = {
  specs: {
    model: '1E78V2',
    energy: 100,
    sensors: 15
  },
  get totalSensors() {
    return typeof this.specs.sensors === 'number'
      ? this.specs.sensors
      : 'Sensor data unavailable.';
  },
  set totalSensors(value) {
    if (typeof value === 'number' && value >= 0) {
      this.specs.sensors = value;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

// Paso 4: Usamos el setter para cambiar el número de sensores

systemBot3.totalSensors = 100;

// Paso 5: Comprobamos si el cambio fue exitoso

console.log(systemBot3.totalSensors); // Resultado esperado: 100

