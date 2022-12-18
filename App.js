// Product Constructor
class Product {
    constructor(code, name, price, year) {
		this.code = code;
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class Product2 {
    constructor(id, code, name, price, year) {
		this.id = id;
		this.code = code;
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                	<strong>Código</strong>: ${product.code} -
                    <strong>Produto</strong>: ${product.name} -
                    <strong>Preço</strong>: ${product.price} - 
                    <strong>Ano</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Excluir</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }
    
    addProduct2(product) {
        const productList = document.getElementById('product-all');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                	<strong>ID</strong>: ${product.id} -
                	<strong>Código</strong>: ${product.code} -
                    <strong>Produto</strong>: ${product.name} -
                    <strong>Preço</strong>: ${product.price} - 
                    <strong>Ano</strong>: ${product.year}
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }
    
    resetForm2() {
        document.getElementById('product-all').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Produto deletado com sucesso', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#appMessage');
        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 4 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 4000);
    }
}

// DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const code = document.getElementById('code').value,
        	name = document.getElementById('name').value,
            price = document.getElementById('price').value,
            year = document.getElementById('year').value;
            

        // Create a new Oject Product
        const product = new Product(code, name, price, year);

        // Create a new UI
        const ui = new UI();

        // Input User Validation
        if (code === '' || name === '' || price === '' || year === '') {
            ui.showMessage('Por favor, insira os dados nos campos.', 'danger');
        }

        // Save Product
        ui.addProduct(product);
        ui.showMessage('Produto adicionado com sucesso', 'success');
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });
