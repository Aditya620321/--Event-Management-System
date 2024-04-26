// script.js
const eventsList = document.getElementById('events-list');
const registrationForm = document.getElementById('registration-form');

// Sample event data (replace with actual data)
const eventsData = [
  { id: 1, name: 'Conference', date: '2024-05-01', location: 'New York' },
  { id: 2, name: 'Workshop', date: '2024-05-15', location: 'San Francisco' }
];

// Display events
function displayEvents() {
  eventsList.innerHTML = '';
  eventsData.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.innerHTML = `
      <div class="event">
        <h3>${event.name}</h3>
        <p>Date: ${event.date}</p>
        <p>Location: ${event.location}</p>
        <button onclick="registerForEvent(${event.id})">Register</button>
      </div>
    `;
    eventsList.appendChild(eventElement);
  });
}

// Register for event
function registerForEvent(eventId) {
  const name = prompt('Enter your name:');
  const email = prompt('Enter your email:');
  if (name && email) {
    // Send registration data to backend (not implemented in this example)
    alert('Registration successful!');
  } else {
    alert('Please provide your name and email to register.');
  }
}

// Event listener for registration form submission
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  if (name && email) {
    // Send registration data to backend (not implemented in this example)
    alert('Registration successful!');
  } else {
    alert('Please provide your name and email to register.');
  }
});

// Initial display of events
displayEvents();
