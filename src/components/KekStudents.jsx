import React from 'react';

export default function KekStudents(props) {

    const kekambasStudents = ['ID', 'First Name', 'Last Name'];
    // const handleClick = e => {
    //     e.preventDefault();
    //     e.target.onClick
    // }

    return (
    <div>
        <h3 className="text-center my-3 text-light">Kekambas-106</h3>
        <button className='btn btn-outline-warning btn-lg w-100 rounded-pill' onClick={props.fetch}>Show Class</button>
        <table className="table table-dark table-striped">
                <thead>
                    <tr className='table-bordered border-primary'>
                        {kekambasStudents.map((headerName, i) => <th key={i}>{headerName}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.kekambas.map((kekamba, index) => (
                        <tr key={kekamba.id}>
                            <td className='table-bordered border-primary'>{index + 1}</td>
                            <td className='table-bordered border-primary'>{kekamba.first_name}</td>
                            <td className='table-bordered border-primary'>{kekamba.last_name}</td>
                        </tr>
                    ))}
                </tbody>
        </table>
    </div>
    );
}
