// const list_contacts = document.getElementsByClassName("contact-item cf");
const list_contacts2 = document.querySelectorAll(`.contact-details`);
const list_avatars = document.querySelectorAll(`.avatar`);
const list_avatars_array = Array.apply(null, list_avatars);
const list_names = document.querySelectorAll(`.contact-details h3`);
const list_names_array = Array.apply(null, list_names);
const list_emails = document.querySelectorAll(`.email`);
const list_emails_array = Array.apply(null, list_emails);
const list_dates = document.querySelectorAll(`.date`);
const list_dates_array = Array.apply(null, list_dates);
// console.log(list_contacts2);
// console.log(list_avatars);
// console.log(list_names);
// console.log(list_emails);
// console.log(list_dates);

const listContact_element = document.getElementById('list-contact');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
row_per_page = 9;

function HideContact() {
    document.getElementById('contact-list').style.display = 'none';
}

HideContact();

function DisplayContact(list_avatars, list_names, list_emails, list_dates, wrapper, row_per_page, page) {

    wrapper.innerHTML = "";
    page--;

    let loop_start = row_per_page * page;
    let loop_end = loop_start + row_per_page;
    let paginatedAvatars = list_avatars.slice(loop_start, loop_end);
    let paginatedNames = list_names.slice(loop_start, loop_end);
    let paginatedEmails = list_emails.slice(loop_start, loop_end);
    let paginatedDates = list_dates.slice(loop_start, loop_end);



    for (let i = 0; i < paginatedAvatars.length; i++) {
        let avatar = paginatedAvatars[i];
        let name = paginatedNames[i];
        let email = paginatedEmails[i];
        let date = paginatedDates[i];

        let contact_element = document.createElement('li');
        contact_element.classList.add('contact-item');

        let contact_detail_element = document.createElement('div');
        contact_detail_element.classList.add('contact-details');

        contact_element.appendChild(contact_detail_element);

        let avatar_element = document.createElement('img');
        avatar_element.classList.add('avatar');
        avatar_element = avatar;
        contact_detail_element.appendChild(avatar_element);

        let name_element = document.createElement('h3');
        contact_detail_element.appendChild(name_element);
        name_element.innerHTML = name.innerText;

        let email_element = document.createElement('span');
        email_element.classList.add('email');
        contact_detail_element.appendChild(email_element);
        email_element.innerHTML = email.innerText;

        let join_detail_element = document.createElement('div');
        join_detail_element.classList.add('joined-details');

        contact_element.appendChild(join_detail_element);

        let date_element = document.createElement('span');
        date_element.classList.add('date');
        join_detail_element.appendChild(date_element);
        date_element.innerHTML = date.innerText;

        wrapper.appendChild(contact_element);

    }

}


function SetupPagination(list_avatars, list_names, list_emails, list_dates, wrapper, row_per_page) {
    wrapper.innerHTML = "";
    let page_count = Math.ceil(list_avatars.length / row_per_page);
    for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, list_avatars, list_names, list_emails, list_dates);
        wrapper.appendChild(btn);
    }
}

function PaginationButton(page, list_avatars, list_names, list_emails, list_dates) {
    let button = document.createElement('button');
    button.innerText = page;
    if (current_page == page) {
        button.classList.add('active');
    }

    button.addEventListener('click', function() {
        current_page = page;
        DisplayContact(list_avatars, list_names, list_emails, list_dates, listContact_element, row_per_page, current_page);

        let current_button = document.querySelector('.pagenumber button.active');
        current_button.classList.add('active');
    })

    return button;
}

SetupPagination(list_avatars_array, list_names_array, list_emails_array, list_dates_array, pagination_element, row_per_page);