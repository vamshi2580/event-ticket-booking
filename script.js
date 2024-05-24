const events = [
    { id: 1, name: 'Concert A', date: '2024-06-10', location: 'Venue A' },
    { id: 2, name: 'Concert B', date: '2024-07-15', location: 'Venue B' },
    { id: 3, name: 'Concert C', date: '2024-08-20', location: 'Venue C' }
];

function showBookingForm(eventId) {
    const event = events.find(e => e.id === eventId);
    document.getElementById('eventInfo').textContent = `You are booking tickets for ${event.name} on ${event.date} at ${event.location}.`;
    document.getElementById('events').style.display = 'none';
    document.getElementById('booking').style.display = 'block';
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting the traditional way

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const quantity = document.getElementById('quantity').value;
        document.getElementById('confirmationDetails').textContent = `Name: ${name}, Email: ${email}, Quantity: ${quantity}, Event: ${event.name}, Date: ${event.date}, Location: ${event.location}`;
        
        document.getElementById('booking').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
    });
}
