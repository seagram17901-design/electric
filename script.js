const devicesContainer =
document.getElementById('devices');

function addDevice(){

  const device =
  document.createElement('div');

  device.className = 'device';

  device.innerHTML = `
  
    <div class="grid">

      <input 
        type="text"
        placeholder="ชื่ออุปกรณ์"
        class="name"
      >

      <input
        type="number"
        placeholder="จำนวนวัตต์"
        class="watt"
      >

      <input
        type="number"
        placeholder="ชั่วโมง/วัน"
        class="hours"
      >

      <button
        class="delete-btn"
        onclick="this.parentElement.parentElement.remove()"
      >
        ลบ
      </button>

    </div>

  `;

  devicesContainer.appendChild(device);
}

addDevice();

function calculate(){

  const rate =
  parseFloat(
    document.getElementById('rate').value
  ) || 0;

  const period =
  parseFloat(
    document.getElementById('period').value
  ) || 0;

  const devices =
  document.querySelectorAll('.device');

  const resultBody =
  document.getElementById('resultBody');

  resultBody.innerHTML = '';

  let grandTotal = 0;

  devices.forEach(device => {

    const name =
    device.querySelector('.name').value || '-';

    const watt =
    parseFloat(
      device.querySelector('.watt').value
    ) || 0;

    const hours =
    parseFloat(
      device.querySelector('.hours').value
    ) || 0;

    const unitPerDay =
    (watt / 1000) * hours;

    const costPerDay =
    unitPerDay * rate;

    const total =
    costPerDay * period;

    grandTotal += total;

    resultBody.innerHTML += `
    
      <tr>

        <td>${name}</td>

        <td>${watt}W</td>

        <td>${hours} ชม.</td>

        <td>
          ${unitPerDay.toFixed(2)}
        </td>

        <td>
          ${costPerDay.toFixed(2)} บาท
        </td>

        <td>
          ${total.toFixed(2)} บาท
        </td>

      </tr>

    `;
  });

  document.getElementById(
    'grandTotal'
  ).innerText =

  'รวมทั้งหมด ' +
  grandTotal.toFixed(2) +
  ' บาท';

  document.getElementById(
    'resultCard'
  ).style.display = 'block';
}

function closeModal(){

  document.getElementById(
    'announcementModal'
  ).style.display = 'none';
}