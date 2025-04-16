function getConfiguration(config) {
    // Esta función permite indicar valores de configuración generales para 
    // todos los dispositivos de este modelo.

    // Dependiendo del significado de la "dirección del dispositivo" en este 
    // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
    // para hacer referencia a la dirección en la interfaz de usuario.
    // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
    // MAC, es posible que desee utilizar el código siguiente.

    // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints) {
    // Esta función le permite indicar la configuración inicial de los endpoints
    // cuando se crea un dispositivo de este modelo. Esto mejora significativamente 
    // la experiencia del usuario final, ya que permite a la plataforma crear 
    // todos los endpoints incluidos en el dispositivo automáticamente cuando se 
    // crea el dispositivo.

    // En el código siguiente, se crean dos endpoints. El primero es un sensor de 
    // temperatura, mientras que el segundo es un sensor de dióxido de carbono.


    endpoints.addEndpoint("1", "WHP", endpointType.pressureSensor);
    endpoints.addEndpoint("2", "LP", endpointType.pressureSensor);
    endpoints.addEndpoint("3", "VALVE_STATUS", endpointType.appliance); 
    endpoints.addEndpoint("4", "LAST_SHUT_IN_HOUR", endpointType.runTimeMeter);
    endpoints.addEndpoint("5", "SHUT_IN_OPENING_PRE", endpointType.pressureSensor);
    endpoints.addEndpoint("6", "MAINT_CYCLES_OPENING_PRE", endpointType.pressureSensor);
    endpoints.addEndpoint("7", "MAX_PRE_TO_OPEN", endpointType.pressureSensor);
    endpoints.addEndpoint("8", "LATITUDE", endpointType.locationTracker);
    endpoints.addEndpoint("9", "VALVE_STATUS_GEN", endpointType.genericSensor);
    endpoints.addEndpoint("10", "OPEN_VALVE_TIME_COUNTER", endpointType.appliance);
    endpoints.addEndpoint("11", "WHT", endpointType.temperatureSensor);
    endpoints.addEndpoint("12", "UPSTREAM_PRE", endpointType.pressureSensor);
    endpoints.addEndpoint("13", "FLOW_REGIME", endpointType.flowSensor);
    endpoints.addEndpoint("14", "SHUT_IN_MIN_TURNER", endpointType.genericSensor);
    endpoints.addEndpoint("15", "MAINT_CYCLES_MIN_TURNER", endpointType.genericSensor);
    endpoints.addEndpoint("16", "GAS_FLOW_RATE", endpointType.flowSensor);
    endpoints.addEndpoint("17", "LIQUID_FLOW_RATE", endpointType.flowSensor);
    endpoints.addEndpoint("18", "AI1_CONNECTED", endpointType.appliance);
    endpoints.addEndpoint("19", "AI2_CONNECTED", endpointType.appliance);
    endpoints.addEndpoint("20", "AI3_CONNECTED", endpointType.appliance);
    endpoints.addEndpoint("21", "AI4_CONNECTED", endpointType.appliance);
    endpoints.addEndpoint("22", "SHUT_IN_OPENING_MODE", endpointType.genericSensor);
    endpoints.addEndpoint("23", "SHUT_IN_CLOSING_MODE", endpointType.genericSensor);
    endpoints.addEndpoint("24", "LONGITUDE", endpointType.locationTracker);
}

function validateDeviceAddress(address, result) {
    // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
    // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
    // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
    // caso de que el formato de la dirección sea incorrecto.

    // En el código siguiente, se realiza una validación para asegurarse de que la 
    // dirección tiene exactamente 10 caracteres.

    // if (address.length != 10) {
    //   result.ok = false;
    //   result.errorMessage = {
    //     en: "The address must be 10 characters long", 
    //     es: "La dirección debe tener exactamente 10 caracteres"
    //   };
    // }
}

function updateDeviceUIRules(device, rules) {
    // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
    // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
    // de endpoints manualmente al dispositivo después de que se creó.

    // En el código siguiente, el agregado manual de endpoints está deshabilitada 
    // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
    // endpoints definidos por la función getEndpoints() anterior.

    // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules) {
    // Esta función permite especificar reglas de interfaz de usuario para cada
    // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
    // eliminación de endpoints, o la edición de subtipo de endpoint.

    // En el código siguiente, se definen las siguientes reglas:
    // - Los endpoints no se pueden eliminar.
    // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.

    // rules.canDelete = false;
    // rules.canEditSubType = (endpoint.address == "2");
}
