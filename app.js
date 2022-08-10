// https://calculator.swiftutors.com/boiling-point-elevation-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const temperatureChangeRadio = document.getElementById('temperatureChangeRadio');
const vantHoffFactorRadio = document.getElementById('vantHoffFactorRadio');
const ebullioscopicConstantRadio = document.getElementById('ebullioscopicConstantRadio');
const molalityoftheSolutionRadio = document.getElementById('molalityoftheSolutionRadio');

let temperatureChange;
let vantHoffFactor = v1;
let ebullioscopicConstant = v2;
let molalityoftheSolution = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

temperatureChangeRadio.addEventListener('click', function() {
  variable1.textContent = '(i) Van\'t Hoff Factor';
  variable2.textContent = '(kb) Ebullioscopic Constant (kg/mol)';
  variable3.textContent = '(m) Molality of the Solution (mol/kg)';
  vantHoffFactor = v1;
  ebullioscopicConstant = v2;
  molalityoftheSolution = v3;
  result.textContent = '';
});

vantHoffFactorRadio.addEventListener('click', function() {
  variable1.textContent = '(Δt) Temperature Change (°C)';
  variable2.textContent = '(kb) Ebullioscopic Constant (kg/mol)';
  variable3.textContent = '(m) Molality of the Solution (mol/kg)';
  temperatureChange = v1;
  ebullioscopicConstant = v2;
  molalityoftheSolution = v3;
  result.textContent = '';
});

ebullioscopicConstantRadio.addEventListener('click', function() {
  variable1.textContent = '(Δt) Temperature Change (°C)';
  variable2.textContent = '(i) Van\'t Hoff Factor';
  variable3.textContent = '(m) Molality of the Solution (mol/kg)';
  temperatureChange = v1;
  vantHoffFactor = v2;
  molalityoftheSolution = v3;
  result.textContent = '';
});

molalityoftheSolutionRadio.addEventListener('click', function() {
  variable1.textContent = '(Δt) Temperature Change (°C)';
  variable2.textContent = '(i) Van\'t Hoff Factor';
  variable3.textContent = '(kb) Ebullioscopic Constant (kg/mol)';
  temperatureChange = v1;
  vantHoffFactor = v2;
  ebullioscopicConstant = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(temperatureChangeRadio.checked)
    result.textContent = `Temperature Change = ${computeTemperatureChange().toFixed(2)} °C`;

  else if(vantHoffFactorRadio.checked)
    result.textContent = `Van't Hoff Factor = ${computeVantHoffFactor().toFixed(2)}`;

  else if(ebullioscopicConstantRadio.checked)
    result.textContent = `Ebullioscopic Constant = ${computeEbullioscopicConstant().toFixed(2)} kg/mol`;

  else if(molalityoftheSolutionRadio.checked)
    result.textContent = `Molality of the Solution = ${computeMolalityoftheSolution().toFixed(2)} mol/kg`;
})

// calculation

function computeTemperatureChange() {
  return Number(vantHoffFactor.value) * Number(ebullioscopicConstant.value) * Number(molalityoftheSolution.value);
}

function computeVantHoffFactor() {
  return Number(temperatureChange.value) / (Number(ebullioscopicConstant.value) * Number(molalityoftheSolution.value));
}

function computeEbullioscopicConstant() {
  return Number(temperatureChange.value) / (Number(vantHoffFactor.value) * Number(molalityoftheSolution.value));
}

function computeMolalityoftheSolution() {
  return Number(temperatureChange.value) / (Number(vantHoffFactor.value) * Number(ebullioscopicConstant.value));
}