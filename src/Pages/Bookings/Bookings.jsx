import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])


    const url = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete this booking')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const newBookings = bookings.filter(booking => booking._id !== id)
                        setBookings(newBookings)
                    }
                })
        }
    }

    const handleConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirmed' })

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const newBookings = bookings.map(booking => booking._id === id ? { ...booking, status: 'confirmed' } : booking)
                    setBookings(newBookings)
                }
            })
    }
    return (
        <div>
            <h2
                className="text-5xl text-center">Your Booking List : {bookings.length}
            </h2>
            <div>
                <div className="mx-auto">
                    <table className="table">

                        <tbody>
                            {/* row 1 */}
                            {
                                bookings.map(booking => <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleConfirm={handleConfirm}>
                                </BookingRow>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;