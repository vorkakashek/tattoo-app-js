function ready() {
	const RangeSlider = {
	    initialize() {
	        for (const element of document.querySelectorAll('.range-slider')) {
	            const min = element.dataset.min || 1;
	            const max = element.dataset.max;
	            noUiSlider.create(element, {
	                start: element.dataset.multiple ? [min, max] : [min],
	                step: +(element.dataset.step || 1),
	                connect: true,
	                range: {
	                    min: [+min],
	                    max: [+max],
	                },
	                format: {
	                    to: value => value.toFixed(0),
	                    from: value => +value,
	                },
	            });
	            /** @property noUiSlider */
	            element.noUiSlider.on('update', (values, handle) => {
	                const wrapper = element.closest('.range-wrapper');
	                const inputs = [...wrapper.querySelectorAll('.range-input')];
	                const infoBoxes = [...wrapper.querySelectorAll('.range-info')];
	                if (inputs[handle] !== undefined) {
	                    inputs[handle].value = values[handle];
	                }
	                if (infoBoxes[handle] !== undefined) {
	                    infoBoxes[handle].textContent = values[handle];
	                }
	            });
	        }
	
	        document.addEventListener('change', e => {
	            const target = e.target;
	            if (target.classList.contains('range-input')) {
	                const wrapper = target.closest('.range-wrapper');
	                const element = wrapper.querySelector('.range-slider');
	                if (element !== null) {
	                    const index = [...wrapper.querySelectorAll('.range-input')].indexOf(target);
	                    /** @method setHandle */
	                    element.noUiSlider.setHandle(index, target.value);
	                }
	            }
	        });
	    },
	};
	
	RangeSlider.initialize();
	
	// 

	// MODAL PHOTO SLIDER
	for (const element of document.querySelectorAll('.swiper-container')) {
		const modalSwiper = new Swiper('.swiper-container', {
			// Optional parameters
			loop: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'custom',
				renderCustom: function (swiper, current, total) {
					return current + ' из ' + total;
				}
			}
		});
	}

	// NEWs PAGE PHOTO SLIDER
	for (const element of document.querySelectorAll('.swiper-preview-container')) {
		const galleryThumbs = new Swiper('.swiper-preview-container.gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: 3,
			// loop: true,
			freeMode: true,
			loopedSlides: 5, //looped slides should be the same
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		const galleryTop = new Swiper('.swiper-preview-container.gallery-top', {
			spaceBetween: 10,
			// loop:true,
			loopedSlides: 5, //looped slides should be the same
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
			thumbs: {
			  swiper: galleryThumbs,
			},
		});
	}

	// TOP 10 MASTERS
	for (const element of document.querySelectorAll('.swiper-top10-container')) {
		const modalSwiper = new Swiper('.swiper-top10-container', {
			// Optional parameters
			loop: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			slidesPerView: '1',
			breakpoints: {
				576: {
					slidesPerView: '2',
				},
				768: {
					slidesPerView: '2',
				},
				992: {
					slidesPerView: '3',
				},
				1200: {
					slidesPerView: '4',
					
				},
				1400: {
					slidesPerView: '5',
					
				}
			}
		});
	}


	var filterWrap;
	filterWrap = document.querySelector('[class*="-filter-wrap"]');

	if(filterWrap) {
		if(filterWrap.classList.contains('hide')) {
			document.querySelector('.filter-btn-wrap a.filter-btn span.link-text').innerHTML='Показать фильтры';
		} else {
			document.querySelector('.filter-btn-wrap a.filter-btn span.link-text').innerHTML='Скрыть фильтры';
		}
	}
	// F I L E P O N D 

	FilePond.registerPlugin(
		FilePondPluginImagePreview
	);
	
	FilePond.create(
		document.querySelector('.modal__drag-and-drop--sketch input[type="file"]'),
		{
			server: '',
			labelIdle: 'Перетащите изображения сюда <br> или <br> <a class="btn filepond--label-action">Выберите файлы</a> <br> Не более 128мб',
			labelInvalidField: 'Поле содержит недопустимые файлы',
			labelFileWaitingForSize: 'Ожидание размера',
			labelFileSizeNotAvailable: 'Размер не доступен',
			labelFileLoading: 'Загрузка',
			labelFileLoadError: 'Ошибка при загрузке',
			labelFileProcessing: 'Загружаем',
			labelFileProcessingComplete: 'Загрузка завершена',
			labelFileProcessingAborted: 'Загрузка отменена',
			labelFileProcessingError: 'Ошибка при загрузке',
			labelFileProcessingRevertError: 'Ошибка повтора',
			labelFileRemoveError: 'Ошибка при удалении',
			labelTapToCancel: 'нажмите, чтобы отменить',
			labelTapToRetry: 'нажмите, чтобы повторить попытку',
			labelTapToUndo: 'нажмите, чтобы отменить',
			labelButtonRemoveItem: 'Удалить',
			labelButtonAbortItemLoad: 'Прервать',
			labelButtonRetryItemLoad: 'Повторить',
			labelButtonAbortItemProcessing: 'Отменить',
			labelButtonUndoItemProcessing: 'Отменить',
			labelButtonRetryItemProcessing: 'Повторить',
			labelButtonProcessItem: 'Загрузить',
			allowImagePreview: true,
			imagePreviewMaxHeight: 120
		}
	);

	FilePond.create(
		document.querySelector('.modal__drag-and-drop--photo input[type="file"]'),
		{
			server: '',
			labelIdle: 'Перетащите изображения сюда <br> или <br> <a class="btn filepond--label-action">Выберите файлы</a> <br> Не более 128мб',
			labelInvalidField: 'Поле содержит недопустимые файлы',
			labelFileWaitingForSize: 'Ожидание размера',
			labelFileSizeNotAvailable: 'Размер не доступен',
			labelFileLoading: 'Загрузка',
			labelFileLoadError: 'Ошибка при загрузке',
			labelFileProcessing: 'Загружаем',
			labelFileProcessingComplete: 'Загрузка завершена',
			labelFileProcessingAborted: 'Загрузка отменена',
			labelFileProcessingError: 'Ошибка при загрузке',
			labelFileProcessingRevertError: 'Ошибка повтора',
			labelFileRemoveError: 'Ошибка при удалении',
			labelTapToCancel: 'нажмите, чтобы отменить',
			labelTapToRetry: 'нажмите, чтобы повторить попытку',
			labelTapToUndo: 'нажмите, чтобы отменить',
			labelButtonRemoveItem: 'Удалить',
			labelButtonAbortItemLoad: 'Прервать',
			labelButtonRetryItemLoad: 'Повторить',
			labelButtonAbortItemProcessing: 'Отменить',
			labelButtonUndoItemProcessing: 'Отменить',
			labelButtonRetryItemProcessing: 'Повторить',
			labelButtonProcessItem: 'Загрузить',
			allowImagePreview: true,
			imagePreviewMaxHeight: 120
		}
	);

	FilePond.create(
		document.querySelector('.modal__drag-and-drop--user-files input[type="file"]'),
		{
			server: '',
			labelIdle: 'Перетащите изображения сюда <br> или <br> <a class="btn filepond--label-action">Выберите файлы</a> <br> Не более 128мб',
			labelInvalidField: 'Поле содержит недопустимые файлы',
			labelFileWaitingForSize: 'Ожидание размера',
			labelFileSizeNotAvailable: 'Размер не доступен',
			labelFileLoading: 'Загрузка',
			labelFileLoadError: 'Ошибка при загрузке',
			labelFileProcessing: 'Загружаем',
			labelFileProcessingComplete: 'Загрузка завершена',
			labelFileProcessingAborted: 'Загрузка отменена',
			labelFileProcessingError: 'Ошибка при загрузке',
			labelFileProcessingRevertError: 'Ошибка повтора',
			labelFileRemoveError: 'Ошибка при удалении',
			labelTapToCancel: 'нажмите, чтобы отменить',
			labelTapToRetry: 'нажмите, чтобы повторить попытку',
			labelTapToUndo: 'нажмите, чтобы отменить',
			labelButtonRemoveItem: 'Удалить',
			labelButtonAbortItemLoad: 'Прервать',
			labelButtonRetryItemLoad: 'Повторить',
			labelButtonAbortItemProcessing: 'Отменить',
			labelButtonUndoItemProcessing: 'Отменить',
			labelButtonRetryItemProcessing: 'Повторить',
			labelButtonProcessItem: 'Загрузить',
			allowImagePreview: true,
			imagePreviewMaxHeight: 120
		}
	);

	// Custom Google Maps
	
	// 

}
document.addEventListener("DOMContentLoaded", ready);




// 

function openFavTab(evt, tabName) {
	var i, tabcontent, tablinks;

	tabcontent = document.querySelectorAll(".tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].className = tabcontent[i].className.replace(" active", "");
	}

	tablinks = document.querySelectorAll(".tablink");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).className += " active";
	evt.currentTarget.className += " active";
}

// Скрипт открытия / закрытия фильтров

document.addEventListener('click', e => {
	const target = e.target;

	if (target.classList.contains('filter-btn')) {
		const parent = target.closest('[class$="-filter-section"]');
		const btnText = target.querySelector('span.link-text');
		console.log('click!');
		if (parent !== null) {
			const form = parent.querySelector('form');
			if (form !== null) {

				if (form.classList.contains('hide')) {
					btnText.innerHTML='Скрыть фильтры';
					
					form.classList.remove('hide');
					form.classList.add('show', 'inline-block');
				} else {
					btnText.innerHTML='Показать фильтры';
					
					form.classList.remove('show', 'inline-block');
					form.classList.add('hide');
				}

			}
			
		}
	}
});


// 

document.addEventListener('click', e => {
	const target = e.target;
	if (target.classList.contains('select-all')) {
		const group = target.closest('.check-wrap').querySelector('.check-group');
		if (group !== null) {
			[...group.querySelectorAll('input[type="checkbox"]')].map(e => e.checked = target.checked);
		}
	}
});

// закрываем активную модалку через крестик или через кнопку "ОК"

document.addEventListener('click', e => {
	const target = e.target;
	if ((target.classList.contains('close-modal')) || (target.classList.contains('close-x'))) {
		const currentModal = document.querySelectorAll('.tingle-modal.tingle-modal--visible');
		currentModal[currentModal.length-1].classList.remove('tingle-modal--visible');
	}
});



// Открываем нужную модалку, проверяя класс

document.addEventListener('click', e => {
	const target = e.target;
	if (target.matches("[class^='photo-hover']")) {
		// модалки: слайдеры фото и скетчей в галерее и избранном
		if(target.matches("[class$='--photo']")) {
			document.querySelector('.tingle-modal.modal__gallery-slider-photo').classList.add('tingle-modal--visible');
		}
		if(target.matches("[class$='--sketch']")) {
			document.querySelector('.tingle-modal.modal__gallery-slider-sketch').classList.add('tingle-modal--visible');
		}
		if(target.matches("[class$='--feedback-attachments']")) {
			document.querySelector('.tingle-modal.modal__gallery-slider-feedback-attachments').classList.add('tingle-modal--visible');
		}
		// модалки: слайдеры с кнопкой редактирования фото и скетчей в профиле
		if(target.matches("[class*='--edit-slider']")) {
			if(target.matches("[class$='-photo']")) {
				document.querySelector('.tingle-modal.modal__edit-slider-photo').classList.add('tingle-modal--visible');
			}
			if(target.matches("[class$='-sketch']")) {
				document.querySelector('.tingle-modal.modal__edit-slider-sketch').classList.add('tingle-modal--visible');
			}
		}
	}
});

// открываем модалку с редактором работы фото или скетч в профиле. (чекбоксы и прочие поля для заполнения)

document.addEventListener('click', e => {
	const target = e.target;
	const activeModals = document.querySelectorAll('.tingle-modal--visible');

	if (target.classList.contains('edit-work--photo')) {
		if (activeModals !== null) {
			[...activeModals].map(e => e.classList.remove('tingle-modal--visible'));
		}
		document.querySelector('.tingle-modal.modal__redactor-work--photo').classList.add('tingle-modal--visible');
	}
	if (target.classList.contains('edit-work--sketch')) {
		if (activeModals !== null) {
			[...activeModals].map(e => e.classList.remove('tingle-modal--visible'));
		}
		document.querySelector('.tingle-modal.modal__redactor-work--sketch').classList.add('tingle-modal--visible');
	}
});

// открываем модалку 'мои работы' на плитку с " + "

document.addEventListener('click', e => {
	const target = e.target;
	if(target.matches("[class*='upload-file']")) {
		if(target.matches("[class*='--photo']")) {
			document.querySelector('.tingle-modal.modal__drag-and-drop--photo').classList.add('tingle-modal--visible');
		}
		if(target.matches("[class*='--sketch']")) {
			document.querySelector('.tingle-modal.modal__drag-and-drop--sketch').classList.add('tingle-modal--visible');
		}
		if(target.matches("[class*='--user-files']")) {
			document.querySelector('.tingle-modal.modal__drag-and-drop--user-files').classList.add('tingle-modal--visible');
		}
	}
});

// Открываем модалку "подать заявку"
// .modal__send-request-to-master
// btn-style__yellow-action

document.addEventListener('click', e => {
	const target = e.target;
	if(target.matches("[class*='__yellow-action']")) {
		document.querySelector('.modal__send-request-to-master').classList.add('tingle-modal--visible');
	}
});

// 

// 
// Модалка редактирования работы
// Выводим выбранные стили в input.selected-styles
// 

document.addEventListener('change', e => {
	const target = e.target;

	if (target.matches('input[type="checkbox"]')) {
		const wrapper = target.closest('.select--styles-work');
		if (wrapper !== null) {
			const elements = [...wrapper.querySelectorAll('input[type="checkbox"]')].filter(e => e.checked);
			if (elements.length > 2) {
				e.checked = false;
				[...wrapper.querySelectorAll('input[type="checkbox"]:not(:checked)')].map(e => e.disabled = true);	
				[...wrapper.querySelectorAll('input[type="checkbox"]:not(:checked)')].map(e => e.closest('label').classList.add('disabled'));
			}
			if (elements.length < 3) {
				[...wrapper.querySelectorAll('input[type="checkbox"]:not(:checked)')].map(e => e.disabled = false);
				[...wrapper.querySelectorAll('input[type="checkbox"]:not(:checked)')].map(e => e.closest('label').classList.remove('disabled'));
			}
			 
			const names = elements.map(e => e.closest('label').querySelector('.name').textContent);
			const list = wrapper.querySelector('.selected-styles');
			list.textContent = names.join(', ') || 'Ничего не выбрано';
		}
	}
});

document.addEventListener('change', e => {
	const target = e.target;

	if (target.matches('input[type="checkbox"]')) {
		const wrapper = target.closest('.check-wrap.accept-rules');
		if (wrapper !== null) {
			const fieldset = wrapper.closest('.redactor-work--form').querySelector('fieldset');
			if (target.checked) {
				fieldset.disabled = false;
			} else {
				fieldset.disabled = true;
			}
		}
	}

});

//
// фиксим безумие Эйха

document.addEventListener('click', e => {
	const target = e.target;
	
	if (!target.matches('[data-action]')) {
		const parent = target.closest('[data-action]');
		if (parent !== null && !(target.classList.contains('link'))) {
			parent.click();
		}
	}
});
//

document.addEventListener('click', e => {
	const target = e.target;
	
	if (target.classList.contains('tab-nav__activation')) {
		const parent = target.closest('.select--styles__tabs');
		if ((parent !== null) && !(target.classList.contains('selected'))) {
			const tabs = parent.querySelectorAll('.select--styles__tab');
			const navs = parent.querySelectorAll('.tab-nav__activation');

			[...navs].map(e => e.classList.toggle('selected'));
			[...tabs].map(e => e.classList.toggle('selected'));
		}
	}
});


document.addEventListener('click', e => {
	const target = e.target;
	if (target.classList.contains('hide-list')) {
		const parent = target.closest('.select--styles-work');
		const list = parent.querySelector('.check-wrap');
		if (parent !== null) {
			if (target.classList.contains('hide-list')) {
				if (list.classList.contains('show')) {
					target.querySelector('span').innerHTML='показать ';
					list.classList.add('hide');
					list.classList.remove('show');
				} else {
					target.querySelector('span').innerHTML='скрыть ';
					list.classList.add('show');
					list.classList.remove('hide');
				}
				
			}
		}
	}
});


document.addEventListener('click', e => {
	const target = e.target;
	if (target.classList.contains('spoiler-panel')) {
		const parent = target.closest('.spoiler-wrap');
		const content = parent.querySelector('.spoiler-content');
		const allPanels = parent.closest('section').querySelectorAll('.spoiler-panel');
		const allContents = parent.closest('section').querySelectorAll('.spoiler-content');

		if (parent !== null) {
			if (content.classList.contains('show')) {
				[...allPanels].map(e => e.classList.remove('active'));
				[...allContents].map(e => e.classList.add('hide'));
				[...allContents].map(e => e.classList.remove('show'));

				content.classList.add('hide');
				content.classList.remove('show');

				target.classList.remove('active');
			}
			else {
				[...allPanels].map(e => e.classList.remove('active'));
				[...allContents].map(e => e.classList.add('hide'));
				[...allContents].map(e => e.classList.remove('show'));

				content.classList.add('show');
				content.classList.remove('hide');
				

				target.classList.add('active');
			}

		}

	}
});


document.addEventListener('click', e => {
	const target = e.target;
	if(target.classList.contains('read-more')) {
		const parent = target.closest('div').querySelector('p');
		if (parent !== null) {

			const hiddenText = parent.querySelector('.hidden-text');

			if (hiddenText.classList.contains('hide')) {
				hiddenText.classList.add('show');
				hiddenText.classList.remove('hide');
				
				target.innerHTML = 'Свернуть текст'
			} else {
				hiddenText.classList.remove('show');
				hiddenText.classList.add('hide');

				target.innerHTML = 'Читать далее...'
			}
		}
	}
});
// 

document.addEventListener('click', e => {
	const target = e.target;
	if (target.classList.contains('proposal--show-hide__wrap')) {
		const card = target.closest('.proposal--card');
		if (card !== null) {
			const proposalBody = card.querySelector('.proposal--body');
			if (proposalBody.classList.contains('hide')) {
				proposalBody.classList.remove('hide');
				card.classList.remove('activated');
			} else {
				proposalBody.classList.add('hide');
				card.classList.add('activated');
			}
			
		}
	}
});

// target.querySelector('input[type="radio"]'


document.addEventListener('click', e => {
	const target = e.target;
	
	if (target.matches('input[type="radio"]')) {
		const parent = target.closest('.pay-list--string');
		if (parent !== null) {
			const allStrings = parent.closest('.pay-list--wrapper').querySelectorAll('.pay-list--string');
			[...allStrings].map(e => e.classList.remove('selected'));

			if (target.checked) {
				parent.classList.add('selected');
			}
		}
	}
});


// 
document.addEventListener('click', e => {
	const target = e.target;

	if (target.matches('.map-chart-filter--close-btn')) {
		const parent = document.querySelector('.map-chart-filter--wrap');

		if (parent !== null) {
			parent.classList.toggle('active');
			const sectionWrap = parent.closest('.section-wrap'); 
			if (parent.classList.contains('active')) {
				target.querySelector('.link-text').innerHTML='Скрыть фильтры';
				// sectionWrap.querySelector('.map-filter--wrap .map-filter--inner').style.left = '500px';
			} else {
				target.querySelector('.link-text').innerHTML='Показать фильтры';
				// sectionWrap.querySelector('.map-filter--wrap .map-filter--inner').style.left = '0';
			}
		}
	}
});


// countdown
const second = 1000, 
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Apr 27, 2020 00:00:00').getTime(), 
	x = setInterval(function() {
		let now = new Date().getTime(),
			distance = countDown - now;
		
		if (document.querySelector('.countdown--wrap') !== null) {
			document.querySelector('#countdown-hours').innerText = Math.floor((distance % (day)) / (hour)),
			document.querySelector('#countdown-minutes').innerText = Math.floor((distance % (hour)) / (minute)),
			document.querySelector('#countdown-seconds').innerText = Math.floor((distance % (minute)) / second);


			if (distance < 0) {
				clearInterval(x);
				document.querySelector('.countdown--inner').innerHTML = '<div class="countdown--reached-msg">Обновите страницу, чтобы увидеть актуальный чарт!</div>'
			}
		} 
        
	});