document.addEventListener('DOMContentLoaded', function() {
  const nutrisiData = [
    {
      title: 'Tabel Nutrisi Garden Strawberry (per 100g)',
      data: [
        { nutrisi: 'Kalori', jumlah: '32 kcal' },
        { nutrisi: 'Karbohidrat', jumlah: '7.7 g' },
        { nutrisi: 'Serat', jumlah: '2 g' },
        { nutrisi: 'Vitamin C', jumlah: '58.8 mg' },
        { nutrisi: 'Folat (B9)', jumlah: '24 mcg' },
        { nutrisi: 'Antioksidan', jumlah: 'Tinggi' }
      ]
    },
    {
      title: 'Tabel Nutrisi Wild Strawberry (per 100g)',
      data: [
        { nutrisi: 'Kalori', jumlah: '35 kcal' },
        { nutrisi: 'Karbohidrat', jumlah: '8 g' },
        { nutrisi: 'Serat', jumlah: '2.2 g' },
        { nutrisi: 'Vitamin C', jumlah: '60 mg' },
        { nutrisi: 'Folat (B9)', jumlah: '26 mcg' },
        { nutrisi: 'Antioksidan', jumlah: 'Sangat Tinggi' }
      ]
    },
    {
      title: 'Tabel Nutrisi Alpine Strawberry (per 100g)',
      data: [
        { nutrisi: 'Kalori', jumlah: '30 kcal' },
        { nutrisi: 'Karbohidrat', jumlah: '7.5 g' },
        { nutrisi: 'Serat', jumlah: '2.1 g' },
        { nutrisi: 'Vitamin C', jumlah: '62 mg' },
        { nutrisi: 'Folat (B9)', jumlah: '22 mcg' },
        { nutrisi: 'Antioksidan', jumlah: 'Tinggi' }
      ]
    },
    {
      title: 'Tabel Nutrisi Beach Strawberry (per 100g)',
      data: [
        { nutrisi: 'Kalori', jumlah: '34 kcal' },
        { nutrisi: 'Karbohidrat', jumlah: '7.8 g' },
        { nutrisi: 'Serat', jumlah: '2 g' },
        { nutrisi: 'Vitamin C', jumlah: '55 mg' },
        { nutrisi: 'Folat (B9)', jumlah: '20 mcg' },
        { nutrisi: 'Antioksidan', jumlah: 'Tinggi' }
      ]
    },
    {
      title: 'Tabel Nutrisi Musk Strawberry (per 100g)',
      data: [
        { nutrisi: 'Kalori', jumlah: '36 kcal' },
        { nutrisi: 'Karbohidrat', jumlah: '8 g' },
        { nutrisi: 'Serat', jumlah: '2.3 g' },
        { nutrisi: 'Vitamin C', jumlah: '60 mg' },
        { nutrisi: 'Folat (B9)', jumlah: '23 mcg' },
        { nutrisi: 'Antioksidan', jumlah: 'Tinggi' }
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
    thJumlah.textContent = 'Jumlah';
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
