alert("Welcome to ECE Learning!");

function showResistor() {
    alert("A resistor controls the flow of electric current.");
}

function showLED() {
    alert("LED is a light-emitting diode that produces light.");
}

function showBattery() {
    alert("A battery provides electrical energy to a circuit.");
}

function showCapacitor() {
    alert("A capacitor stores electrical energy in an electric field.");
}

function calculateOhm() {
    let voltage = Number(document.getElementById("voltage").value);
    let current = Number(document.getElementById("current").value);
    let resistance = Number(document.getElementById("resistance").value);

    if (voltage === 0 && current !== 0 && resistance !== 0) {
        voltage = current * resistance;
        document.getElementById("result").textContent =
            "Voltage = " + voltage + " V";
    }
    else if (current === 0 && voltage !== 0 && resistance !== 0) {
        current = voltage / resistance;
        document.getElementById("result").textContent =
            "Current = " + current + " A";
    }
    else if (resistance === 0 && voltage !== 0 && current !== 0) {
        resistance = voltage / current;
        document.getElementById("result").textContent =
            "Resistance = " + resistance + " Ω";
    }
    else {
        document.getElementById("result").textContent =
            "Enter any two values and leave the third empty.";
    }
}

function showDiode() {
    alert("A diode allows electric current to flow mainly in one direction.");
}

function showTransistor() {
    alert("A transistor is used for switching and amplifying electrical signals.");
}

function showVoltage() {
    alert("Voltage is the electrical pressure that pushes current through a circuit.\n\nUnit: Volt (V)");
}

function showCurrent() {
    alert("Current is the flow of electric charge through a circuit.\n\nUnit: Ampere (A)");
}

function showResistance() {
    alert("Resistance opposes the flow of electric current.\n\nUnit: Ohm (Ω)");
}

function showPower() {
    alert("Electrical power tells us how quickly electrical energy is used.\n\nFormula: P = V × I\nUnit: Watt (W)");
}

function showACDC() {
    alert("AC changes direction periodically. DC flows mainly in one direction.\n\nExample: Home electricity = AC\nBattery = DC");
}

function checkAnswer(question, answer) {
    if (question === 1 && answer === "A") {
        alert("Correct! Voltage is measured in Volts (V).");
    }
    else if (question === 2 && answer === "B") {
        alert("Correct! Current is measured in Amperes (A).");
    }
    else if (question === 3 && answer === "C") {
        alert("Correct! A capacitor stores electrical energy.");
    }
    else {
        alert("Wrong answer. Try again!");
    }
}

function showSeriesCircuit() {
    alert("In a series circuit, components are connected one after another. The same current flows through all components.");
}

function showParallelCircuit() {
    alert("In a parallel circuit, components are connected in separate branches. Each branch gets the supply voltage.");
}

function showLEDCircuit() {
    alert("An LED circuit uses a battery to provide power to an LED. A resistor is usually used to protect the LED.");
}

function showSwitchCircuit() {
    alert("A switch controls the flow of current. When the switch is ON, the circuit is complete and the LED can glow.");
}