// Go around config file and fill Links:
const link_list = document.querySelector('#link_list');
for (let [key, val] of Object.entries(config)) {
    key = key.split('_').join(' ');
    const service = document.createElement('li');
    const service_title = document.createElement('h3');
    const service_title_node = document.createTextNode(key);

    service_title.appendChild(service_title_node);
    service.appendChild(service_title);
    link_list.appendChild(service);

    const inner_services = fill_services(val);
    service.appendChild(inner_services);
}

// Returns UL with service list
function fill_services(array) {
    const service_list = document.createElement('ul');
    array.forEach(({ id, links }) => {
        const inner_service = document.createElement('li');
        service_list.appendChild(inner_service);

        if (links.length > 1) {
            const inner_service_title = document.createTextNode(
                id.split('_').join(' ')
            );
            inner_service.appendChild(inner_service_title);
            links.forEach(({ name, link }) => {
                const new_link = document.createElement('a');
                const new_link_name = document.createTextNode(`[${name}]`);
                const space = document.createTextNode(' ');

                inner_service.appendChild(space);
                new_link.href = link;
                new_link.appendChild(new_link_name);
                inner_service.appendChild(new_link);
            });
        } else {
            const new_link = document.createElement('a');
            const new_link_name = document.createTextNode(
                id.split('_').join(' ')
            );
            new_link.href = links[0].link;
            new_link.appendChild(new_link_name);
            inner_service.appendChild(new_link);
        }
    });
    return service_list;
}

const run_number_input = document.querySelector('#run_number');
run_number_input.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        const run_number = event.target.value;
        const list = document.querySelector('#run_number_dependent_services');
        for (const [key, category] of Object.entries(config)) {
            category.forEach(({ id, links }) => {
                id = id.split('_').join(' ');
                links.forEach(({ name, link, run_link }) => {
                    if (run_link) {
                        const run_dependant_service = document.createElement(
                            'li'
                        );
                        const new_link = document.createElement('a');
                        const new_link_name = document.createTextNode(
                            `${id} - ${name} - Run ${run_number}`
                        );
                        new_link.target = '__blank';
                        new_link.href = `${link}${run_link(run_number)}`;
                        new_link.appendChild(new_link_name);
                        run_dependant_service.appendChild(new_link);
                        list.appendChild(run_dependant_service);
                    }
                });
            });
        }
    }
});
