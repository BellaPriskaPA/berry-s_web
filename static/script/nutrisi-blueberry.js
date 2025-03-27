document.addEventListener('DOMContentLoaded', function() {
    const nutrisiData = [
      {
        title: 'Tabel Nutrisi Highbush Blueberry (per 100g)',
        data: [
          { nutrisi: 'Kalori', jumlah: '57 kcal' },
          { nutrisi: 'Karbohidrat', jumlah: '14.5 g' },
          { nutrisi: 'Serat', jumlah: '2.4 g' },
          { nutrisi: 'Vitamin C', jumlah: '9.7 mg' },
          { nutrisi: 'Vitamin K', jumlah: '19.3 mcg' },
          { nutrisi: 'Antioksidan', jumlah: 'Tinggi' }
        ]
      },
      {
        title: 'Tabel Nutrisi Lowbush Blueberry (per 100g)',
        data: [
          { nutrisi: 'Kalori', jumlah: '57 kcal' },
          { nutrisi: 'Karbohidrat', jumlah: '14.2 g' },
          { nutrisi: 'Serat', jumlah: '2.7 g' },
          { nutrisi: 'Vitamin C', jumlah: '10 mg' },
          { nutrisi: 'Vitamin K', jumlah: '20 mcg' },
          { nutrisi: 'Antioksidan', jumlah: 'Sangat Tinggi' }
        ]
      },
      {
        title: 'Tabel Nutrisi Rabbiteye Blueberry (per 100g)',
        data: [
          { nutrisi: 'Kalori', jumlah: '56 kcal' },
          { nutrisi: 'Karbohidrat', jumlah: '14 g' },
          { nutrisi: 'Serat', jumlah: '2.5 g' },
          { nutrisi: 'Vitamin C', jumlah: '9 mg' },
          { nutrisi: 'Vitamin K', jumlah: '18 mcg' },
          { nutrisi: 'Antioksidan', jumlah: 'Tinggi' }
        ]
      },
      {
        title: 'Tabel Nutrisi Half-High Blueberry (per 100g)',
        data: [
          { nutrisi: 'Kalori', jumlah: '58 kcal' },
          { nutrisi: 'Karbohidrat', jumlah: '14.3 g' },
          { nutrisi: 'Serat', jumlah: '2.6 g' },
          { nutrisi: 'Vitamin C', jumlah: '9.5 mg' },
          { nutrisi: 'Vitamin K', jumlah: '19 mcg' },
          { nutrisi: 'Antioksidan', jumlah: 'Tinggi' }
        ]
      },
      {
        title: 'Tabel Nutrisi Evergreen Huckleberry (per 100g)',
        data: [
          { nutrisi: 'Kalori', jumlah: '61 kcal' },
          { nutrisi: 'Karbohidrat', jumlah: '15.2 g' },
          { nutrisi: 'Serat', jumlah: '3.1 g' },
          { nutrisi: 'Vitamin C', jumlah: '10.5 mg' },
          { nutrisi: 'Vitamin K', jumlah: '21 mcg' },
          { nutrisi: 'Antioksidan', jumlah: 'Sangat Tinggi' }
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
