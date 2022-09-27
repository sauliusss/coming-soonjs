// *****************
// objektinis programavimas
// *****************

class Clock {
  constructor(selector, targetDate) {
    // tie du yra parametrai
    this.selector = selector;
    this.targetDate = targetDate;

    // custom kintamieji, kurie yra viduje susigalvoti
    this.DOM = null;

    // kad pasileistu testas
    this.init();
  }

  init() {
    if (!this.isValidSelector()) {
      return false;
    }
    this.render();
  }

  isValidSelector() {
    if (typeof this.selector !== "string" || this.selector === "") {
      return false;
    }
    this.DOM = document.querySelector(this.selector);
    if (!this.DOM) {
      return false;
    }
    return true;
  }

  formatTime(timeValues) {
    const updatedTime = [];
    for (let i = 0; i < timeValues.length; i++) {
      const time = timeValues[i];
      if (i === 0 || time > 9) {
        updatedTime.push(time);
      } else {
        updatedTime.push("0" + time);
      }
    }
    return updatedTime;
  }

  calcDeadLine() {
    const dabartinisLaikas = new Date();
    const einamiejiMetai = dabartinisLaikas.getFullYear();

    let numanomaData = einamiejimetai + "-" + this.targetDate;
    let numanomasLaikas = new Date(numanomaData);

    const dabartinesMilisekundes = dabartinisLaikas.getTime();
    let numanomosMilisekundes = numanomasLaikas.getTime();

    if (dabartinesMilisekundes > numanomosMilisekundes) {
      numatomaData = einamiejiMetai + 1 + "-" + this.targetDate;
      numanomasLaikas = new Date(numanomaData);
      numanomosMilisekundes = numanomasLaikas.getTime();
    }

    const likusiosMilisekundes = numanomosMilisekundes – dabartinesMilisekundes;
    let likusiosSekundes = Math.floor(likusiosMilisekundes / 1000); 

    const dienos = Math.floor(likusiosSekundes / 60 / 60 / 24);
    likusiosSekundes -= dienos * 60 * 60 * 24;
    const valandos = Math.floor(likusiosSekundes / 60 / 60);
    likusiosSekundes -= valandos * 60 * 60;
    const minutes = Math.floor(likusiosSekundes / 60)
    likusiosSekundes -= minutes * 60;
    

    return[dienos, valandos, minutes, sekundes]


  }


  render() {
    const timeValues = this.formatTime(this.calcDeadLine());
    const labelValues = ["Days", "Hours", "Minutes", "Seconds"];
    let HTML = "";

    for (let i = 0; i < timeValues.length; i++) {
      HTML += `<div class="time">
     <div class="value">${timeValues[i]}</div>
     <div class="label">${labelValues[i]}</div>
     </div>`;
    }
    this.DOM.innerHTML = HTML;
  }
}

// **************************
// funkcine israiska
// **************************

// function Clock(selector) {
//   const DOM = document.querySelector(selector);
//   const timeValues = [432, 9, 37, 39];
//   const labelValues = ["Days", "Hours", "Minutes", "Seconds"];
//   let HTML = "";

//   for (let i = 0; i < timeValues.length; i++) {
//     HTML += `<div class="time">
//     <div class="value">${timeValues[i]}</div>
//     <div class="label">${labelValues[i]}</div>
//     </div>`;
//   }
//   DOM.innerHTML = HTML;
// }

export { Clock };
