document.addEventListener('DOMContentLoaded', function() {
  const nutrisiData = [
    {
      title: 'Tabel Nutrisi Blueberry (per 100g)',
      data: [
        { nutrisi: 'Kalori', jumlah: '57' },
        { nutrisi: 'Karbohidrat', jumlah: '14.5g' },
        { nutrisi: 'Serat', jumlah: '2.4g' },
        { nutrisi: 'Vitamin C', jumlah: '9.7mg' }
      ]
    },
    {
      title: 'Tabel Nutrisi Blackberry (per 100g)',
      data: [
        { nutrisi: 'Kalori', jumlah: '43' },
        { nutrisi: 'Karbohidrat', jumlah: '9.6g' },
        { nutrisi: 'Serat', jumlah: '5.3g' },
        { nutrisi: 'Vitamin C', jumlah: '21mg' }
      ]
    },
    {
      title: 'Tabel Nutrisi Strawberry (per 100g)',
      data: [
        { nutrisi: 'Kalori', jumlah: '32' },
        { nutrisi: 'Karbohidrat', jumlah: '7.7g' },
        { nutrisi: 'Serat', jumlah: '2g' },
        { nutrisi: 'Vitamin C', jumlah: '58.8mg' }
      ]
    }
  ];

  const nutrisiTablesContainer = document.getElementById('nutrisi-tables');

  nutrisiData.forEach(nutrisi => {
    const tableDiv = document.createElement('div');
    const tableTitle = document.createElement('h3');
    tableTitle.textContent = nutrisi.title;
    tableDiv.appendChild(tableTitle);

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    const thNutrisi = document.createElement('th');
    thNutrisi.textContent = 'Nutrisi';
    const thJumlah = document.createElement('th');
    thJumlah.textContent = 'Jumlah per 100g';
    trHead.appendChild(thNutrisi);
    trHead.appendChild(thJumlah);
    thead.appendChild(trHead);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    nutrisi.data.forEach(item => {
      const tr = document.createElement('tr');
      const tdNutrisi = document.createElement('td');
      tdNutrisi.textContent = item.nutrisi;
      const tdJumlah = document.createElement('td');
      tdJumlah.textContent = item.jumlah;
      tr.appendChild(tdNutrisi);
      tr.appendChild(tdJumlah);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    tableDiv.appendChild(table);
    nutrisiTablesContainer.appendChild(tableDiv);
  });
});
