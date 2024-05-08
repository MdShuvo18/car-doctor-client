import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const CheckOut = () => {

    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext)

    const handleFrom = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const dueAmount = form.dueAmount.value;
        const order = {
            customerName: name,
            img,
            email,
            date,
            dueAmount,
            service: title,
            serviceId: _id,
        }
        console.log(order)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Book successfully')
                }
            })
    }

    return (
        <div>
            <div>
                <h1 className="text-3xl text-center font-bold">Book Service : {title}</h1>
            </div>
            <div>

                <form onSubmit={handleFrom} className="card-body">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.name} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="dueAmount" defaultValue={'$' + price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Order Confiremd</button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default CheckOut;