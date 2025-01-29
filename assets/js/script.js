// Data project disimpan dalam file JS
const projects = [
    {
        id: 1,
        title: "Laravel TO - DO List",
        description: "Ini adalah aplikasi web yang dibuat dengan Laravel versi 10.* dan Tailwind CSS, project ini cocok untuk yang ingin melatih pengalaman membuat CRUD dan Autentikasi di Laravel karena di project ini sudah dilengkapi dengan fitur CRUD untuk mengelola TO-DO List dan Kategorinya, dan juga sudah ada fitur Login Multi-user yang membuat project ini bisa memiliki banyak user dan dapat masuk ke dashboardnya masing masing.",
        thumbnail: "assets/img/laravel-todolist-dengan-kategori/thumbnail/laravel-todolist-dengan-kategori.png",
        images: [
            "assets/img/laravel-todolist-dengan-kategori/images/image-1.png",
            "assets/img/laravel-todolist-dengan-kategori/images/image-2.png",
            "assets/img/laravel-todolist-dengan-kategori/images/image-3.png",
            "assets/img/laravel-todolist-dengan-kategori/images/image-4.png",
            "assets/img/laravel-todolist-dengan-kategori/images/image-5.png",
            "assets/img/laravel-todolist-dengan-kategori/images/image-6.png",
        ],
        price: 29999, // Harga jual
        originalPrice: 799999, // Harga awal
        downloadUrl: "https://example.com/download/projectA.zip"
    },
    {
        id: 2,
        title: "Laravel Bookmark Manager",
        description: "Ini adalah aplikasi web yang dibuat dengan Laravel versi 10.* dan Tailwind CSS, project ini cocok untuk yang ingin melatih pengalaman membuat CRUD dan Autentikasi di Laravel karena di project ini sudah dilengkapi dengan fitur CRUD untuk mengelola Bookmark dan Kategorinya, dan juga sudah ada fitur Login Multi-user yang membuat project ini bisa memiliki banyak user dan dapat masuk ke dashboardnya masing masing.",
        thumbnail: "assets/img/laravel-bookmark-manager/thumbnail/laravel-bookmark-manager.png",
        images: [
            "assets/img/laravel-bookmark-manager/images/image-1.png",
            "assets/img/laravel-bookmark-manager/images/image-2.png",
            "assets/img/laravel-bookmark-manager/images/image-3.png",
            "assets/img/laravel-bookmark-manager/images/image-4.png",
            "assets/img/laravel-bookmark-manager/images/image-5.png",
            "assets/img/laravel-bookmark-manager/images/image-6.png",
        ],
        price: 34999, // Harga jual
        originalPrice: 899999, // Harga awal
        downloadUrl: "https://example.com/download/projectA.zip"
    },
    {
        id: 3,
        title: "Laravel Contact Manager",
        description: "Ini adalah aplikasi web yang dibuat dengan Laravel versi 10.* dan Tailwind CSS, project ini cocok untuk yang ingin melatih pengalaman membuat CRUD dan Autentikasi di Laravel karena di project ini sudah dilengkapi dengan fitur CRUD untuk mengelola Contact dan Kategorinya, dan juga sudah ada fitur Login Multi-user yang membuat project ini bisa memiliki banyak user dan dapat masuk ke dashboardnya masing masing.",
        thumbnail: "assets/img/laravel-contact-manager/thumbnail/laravel-contact-manager.png",
        images: [
            "assets/img/laravel-contact-manager/images/image-1.png",
            "assets/img/laravel-contact-manager/images/image-2.png",
            "assets/img/laravel-contact-manager/images/image-3.png",
            "assets/img/laravel-contact-manager/images/image-4.png",
            "assets/img/laravel-contact-manager/images/image-5.png",
            "assets/img/laravel-contact-manager/images/image-6.png",
        ],
        price: 32999, // Harga jual
        originalPrice: 899999, // Harga awal
        downloadUrl: "https://example.com/download/projectA.zip"
    },
    // {
    //     id: 2,
    //     title: "Project B",
    //     description: "Deskripsi singkat project B. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore ducimus temporibus beatae? Iste asperiores totam quo unde distinctio dignissimos cupiditate? Velit temporibus corporis placeat ipsam pariatur commodi, facere labore. Tempore, aspernatur! Nam sunt omnis laudantium qui voluptatem repellendus, porro atque.",
    //     thumbnail: "assets/img/project1/thumbnail/project1-thumbnail.png",
    //     images: [
    //         "assets/img/project1/images/project1-a.png",
    //         "assets/img/project1/images/project1-b.png",
    //         "assets/img/project1/images/project1-c.png",
    //         "assets/img/project1/images/project1-c.png",
    //         "assets/img/project1/images/project1-c.png",
    //         "assets/img/project1/images/project1-c.png",
    //         "assets/img/project1/images/project1-c.png",
    //         "assets/img/project1/images/project1-c.png",
    //         "assets/img/project1/images/project1-c.png",
    //     ],
    //     price: 150000, // Harga jual
    //     originalPrice: 200000, // Harga awal
    //     downloadUrl: "https://example.com/download/projectA.zip"
    // },
    
];

// Menampilkan project cards di halaman index
const projectCardsContainer = document.getElementById('project-cards');
if (projectCardsContainer) {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card border-2 border-zinc-800 text-white rounded-lg p-4 m-2 w-80 text-center';

        // Menghitung diskon
        const discount = ((project.originalPrice - project.price) / project.originalPrice) * 100;

        card.innerHTML = `
            <h2 class="text-xl font-semibold mb-4">${project.title}</h2>
            <img src="${project.thumbnail}" alt="${project.title}" class="w-full object-cover rounded mb-4">
            <div class="mb-4">
                <span class="text-sm line-through text-gray-400">Rp${project.originalPrice.toLocaleString()}</span>
                <span class="text-sm text-green-400">${discount.toFixed(2)}% Off</span>
                <div class="text-xl font-semibold mt-2">Rp${project.price.toLocaleString()}</div>
            </div>
            <button class="mt-4 py-2 px-4 bg-[#238636] text-white w-full rounded" onclick="viewDetail(${project.id})">View Detail</button>
        `;
        
        projectCardsContainer.appendChild(card);
    });
}

// Fungsi untuk navigasi ke halaman detail
function viewDetail(id) {
    window.location.href = `detail.html?id=${id}`;
}

// Menampilkan detail project di halaman detail
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

if (projectId) {
    const project = projects.find(p => p.id == projectId);
    if (project) {
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-description').textContent = project.description;

        // Menampilkan harga diskon dan harga asli
        document.getElementById('discount-price').textContent = `Rp${project.price.toLocaleString()}`;
        document.getElementById('original-price').textContent = `Rp${project.originalPrice.toLocaleString()}`;

        // Menghitung diskon
        const discount = ((project.originalPrice - project.price) / project.originalPrice) * 100;
        document.getElementById('discount').textContent = `${discount.toFixed(2)}%`;

        // Menampilkan gambar-gambar detail
        const imagesContainer = document.getElementById('project-details');
        imagesContainer.innerHTML = ''; // Clear existing images
        project.images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.className = 'w-full rounded';
            imagesContainer.appendChild(imgElement);
        });

        // Menampilkan thumbnail
        const thumbnailElement = document.getElementById('project-thumbnail');
        thumbnailElement.src = project.thumbnail;

        // Menambahkan link download
        const downloadLink = document.getElementById('download-link');
        downloadLink.href = project.downloadUrl;
    }
}

// Menampilkan daftar proyek terkait di halaman detail
const relatedProjectsContainer = document.getElementById('related-projects-list');

if (relatedProjectsContainer) {
    const currentProjectIndex = projects.findIndex(p => p.id == projectId);

    if (currentProjectIndex !== -1) {
        // Ambil 1 proyek sebelum dan 1 proyek setelah proyek saat ini
        const startIndex = Math.max(0, currentProjectIndex - 1);
        const endIndex = Math.min(projects.length, currentProjectIndex + 2); // Ambil 1 proyek setelahnya

        // Dapatkan proyek terkait tanpa memasukkan proyek saat ini
        const relatedProjects = projects.slice(startIndex, endIndex).filter(p => p.id != projectId);

        if (relatedProjects.length > 0) {
            relatedProjects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'card border-2 border-zinc-800 text-white rounded-lg p-4';

                // Menghitung diskon
                const discount = ((project.originalPrice - project.price) / project.originalPrice) * 100;

                projectElement.innerHTML = `
                    <h3 class="text-lg font-semibold mb-2">${project.title}</h3>
                    <img src="${project.thumbnail}" alt="${project.title}" class="w-full rounded mb-2">
                    <div class="mb-2">
                        <span class="text-sm line-through text-gray-400">Rp${project.originalPrice.toLocaleString()}</span>
                        <span class="text-sm text-green-400">${discount.toFixed(2)}% Off</span>
                        <div class="text-lg font-semibold mt-1">Rp${project.price.toLocaleString()}</div>
                    </div>
                    <button class="mt-4 py-2 px-4 bg-[#3a3d4b62] text-white border border-zinc-700 w-full rounded" onclick="viewDetail(${project.id})">View Detail</button>
                `;

                relatedProjectsContainer.appendChild(projectElement);
            });
        } else {
            relatedProjectsContainer.innerHTML = '<p class="text-center">No related projects available.</p>';
        }
    }
}



