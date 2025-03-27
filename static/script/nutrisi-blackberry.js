document.addEventListener('DOMContentLoaded', function() {
    const nutrisiData = [
      {
        title: 'Tabel Nutrisi Common Blackberry (per 100g)',
        data: [
          { nutrisi: 'Kalori', jumlah: '43 kcal' },
          { nutrisi: 'Karbohidrat', jumlah: '9.6 g' },
          { nutrisi: 'Serat', jumlah: '5.3 g' },
          { nutrisi: 'Vitamin C', jumlah: '21 mg' },
          { nutrisi: 'Vitamin K', jumlah: '19.8 mcg' },
          { nutrisi: 'Antioksidan', jumlah: 'Sangat Tinggi' }
        ]
      },
      {
        title: 'Tabel Nutrisi American Blackberry (per 100g)',
        data: [
          { nutrisi: 'Kalori', jumlah: '44 kcal' },
          { nutrisi: 'Karbohidrat', jumlah: '10 g' },
          { nutrisi: 'Serat', jumlah: '5 g' },
          { nutrisi: 'Vitamin C', jumlah: '20 mg' },
          { nutrisi: 'Vitamin K', jumlah: '21 mcg' },
          { nutrisi: 'Antioksidan', jumlah: 'Tinggi' }
        ]
      },
      {
        title: 'Tabel Nutrisi Himalayan Blackberry (per 100g)',
        data: [
          { nutrisi: 'Kalori', jumlah: '46 kcal' },
          { nutrisi: 'Karbohidrat', jumlah: '10.2 g' },
          { nutrisi: 'Serat', jumlah: '5.5 g' },
          { nutrisi: 'Vitamin C', jumlah: '22 mg' },
          { nutrisi: 'Vitamin K', jumlah: '20 mcg' },
          { nutrisi: 'Antioksidan', jumlah: 'Tinggi' }
        ]
      },
      {
        title: 'Tabel Nutrisi Dewberry (per 100g)',
        data: [
          { nutrisi: 'Kalori', jumlah: '42 kcal' },
          { nutrisi: 'Karbohidrat', jumlah: '9.5 g' },
          { nutrisi: 'Serat', jumlah: '5.1 g' },
          { nutrisi: 'Vitamin C', jumlah: '19 mg' },
          { nutrisi: 'Vitamin K', jumlah: '18 mcg' },
          { nutrisi: 'Antioksidan', jumlah: 'Tinggi' }
        ]
      },
      {
        title: 'Tabel Nutrisi Boysenberry (per 100g)',
        data: [
          { nutrisi: 'Kalori', jumlah: '50 kcal' },
          { nutrisi: 'Karbohidrat', jumlah: '12 g' },
          { nutrisi: 'Serat', jumlah: '5.3 g' },
          { nutrisi: 'Vitamin C', jumlah: '21 mg' },
          { nutrisi: 'Vitamin K', jumlah: '20 mcg' },
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
