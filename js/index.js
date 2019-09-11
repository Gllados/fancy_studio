document.querySelector('.content_operations')
    .addEventListener('click', contentOperations);

function contentOperations() {
    fetch('content_operations.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.html-container')
                 .innerHTML = html);
}

document.querySelector('.customer_care_agent')
    .addEventListener('click', customerCareAgent);

function customerCareAgent() {
    fetch('customer_care_agent.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.html-container')
                 .innerHTML = html );
}

document.querySelector('.content_creator')
    .addEventListener('click', contentCreator);

function contentCreator() {
    fetch('content_creator.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.html-container')
                 .innerHTML = html );
}

document.querySelector('.content_production_coordinator')
    .addEventListener('click', contentProductionCoordinator);

function contentProductionCoordinator() {
    fetch('content_production_coordinator.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.html-container')
                 .innerHTML = html );
}

