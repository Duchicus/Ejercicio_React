import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";

const Reserve = () => {

    const navigate = useNavigate();

    const initialValue = {
        name: "",
        email: "",
    };
    const [data, setData] = useState({
        name: "",
        date: ""
    })
    const [disable, setDisable] = useState(true)
    const [alert, setAlert] = useState("")

    const changeData = (e) => {
        console.log(e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        switch (true) {
            case data.name != "" && data.date != "":
                setAlert('');
                setDisable(false);
                break;
            case data.name.length < 3 && data.name.length > 0:
                setAlert('Name must be at least 3 characters');
                setDisable(true);
                break;
            case !data.name || !data.date:
                setAlert('');
                setDisable(true);
                break;
        }
    }, [data])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(data));
        setData(initialValue);
        navigate("/plates")
    };

    return (
        <form>
            <span>Name :</span>
            <input type="text" name="name" id="name" value={data.name} onChange={changeData} />
            <br />
            <span>Date :</span>
            <input type="date" name="date" id="date" value={data.date} onChange={changeData} /><br />
            <button disabled={disable} onClick={handleOnSubmit}>Send</button><br />
            <span>{alert}</span>
        </form>
    )
}

export default Reserve