
let idelement = 1;


const submitForm = e => {
	 e.preventDefault();

	let btnid = 'btn-'+idelement;

	let title = document.querySelector('#titleInput')
	let desc = document.querySelector('#description')



    document.querySelector('#card-list').insertAdjacentHTML(
            'afterend',
            `<div class="col-sm-3" id="${btnid}">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">${title.value}</h5>
						<p class="card-text">${desc.value}</p>
						<a href="#"   class="btn btn-danger">Eliminar</a>
					</div>
				</div>
			</div>
			`
          );

    document
    .querySelector(`#${btnid}`)
    .addEventListener('click', e => {
			let card = document.querySelector('#card-list');

			var element = document.getElementById(btnid);
            element.parentNode.removeChild(element);
			console.log('entro a eliminar',btnid);
		});

    

    title.value = null;
    desc.value = null;
    idelement ++;

    console.log(idelement);
};

const deleteElement = e => {
	let card = document.querySelector('#card-list')


	console.log('entro a eliminar',btnid);
};


document.addEventListener('DOMContentLoaded', () => {

   document
    .querySelector('#todo-form')
    .addEventListener('submit', submitForm);


});