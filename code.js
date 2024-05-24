document.addEventListener('DOMContentLoaded', () => {
    const bookButtons = document.querySelectorAll('.tickets, .hero button');
    const body = document.querySelector('body');

    bookButtons.forEach(button => {
        button.addEventListener('click', showBookingForm);
    });

    function showBookingForm() {
        const formHTML = `
            <div class="booking-form">
                <div class="form-container">
                    <h2>Book Your Ticket</h2>
                    <form id="bookingForm">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required><br><br>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required><br><br>
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" min="1" value="1" required><br><br>
                        <button type="submit">Book Ticket</button>
                        <button type="button" id="cancel">Cancel</button>
                    </form>
                </div>
            </div>
            <style>
                .booking-form {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .form-container {
                    background: #fff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    max-width: 400px;
                    width: 100%;
                    text-align: left;
                }
                .form-container button[type="submit"] {
                    background: #43c6ac;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .form-container button[type="button"] {
                    background: #d64d4d;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-left: 10px;
                }
            </style>
        `;
        
        body.insertAdjacentHTML('beforeend', formHTML);

        const bookingForm = document.getElementById('bookingForm');
        const cancelButton = document.getElementById('cancel');

        bookingForm.addEventListener('submit', handleBookingSubmit);
        cancelButton.addEventListener('click', handleCancel);
    }

    function handleBookingSubmit(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const quantity = document.getElementById('quantity').value;

        alert(`Booking confirmed!\nName: ${name}\nEmail: ${email}\nQuantity: ${quantity}`);

        closeBookingForm();
    }

    function handleCancel() {
        closeBookingForm();
    }

    function closeBookingForm() {
        const bookingForm = document.querySelector('.booking-form');
        if (bookingForm) {
            bookingForm.remove();
        }
    }
});
