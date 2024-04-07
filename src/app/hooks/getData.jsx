
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils";


const useFetchData = (url) => {
    const [fetchedData, setFetchedData] = useState();

    const headers = {
        'token': '2ccff43ecfb-6cab-440b-95fa-d',
        'Content-Type': 'application/json'
    };

    const id = 9

    // console.log("A", A);

    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get(`${BASE_URL + url}&userId=${id}`,
                { headers }
            ).then((res) => {
                // console.log("response...............from hook;", res)
                setFetchedData(res?.data?.Data)
            })

        };

        fetchData();
    }, []);

    return { fetchedData };
};

export default useFetchData;
