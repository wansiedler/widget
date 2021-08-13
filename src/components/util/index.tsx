if (process.env.NODE_ENV !== "development") {
    console.log = (message) => {
    };
    console.error = (message) => {
    };
}

export let log = (message) => {
    (process.env.NODE_ENV === "development") ? console.log(message) : null
}
export let error = (message) => {
    (process.env.NODE_ENV === "development") ? console.error(message) : null
}

export const helpFetch = async (url, headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}, body = undefined) => {

    const settings = {
        headers: headers,
        method: "GET",
        body: undefined
    }
    if (body) {
        settings.method = "POST"
        settings.body = JSON.stringify(body)
        console.log(settings.body)
    }
    return fetch(url, settings)
        .then((response) => {
            if (!response.ok) {
                console.error(url)
                console.error(response)
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((response) => {
            // console.log(response);
            return response;
        })
        .catch((error) => {
            console.error(url)
            console.error(error);
        });

}


// let getAxios = (url) => {
//     // axios.get(
//     //     widgetUrl,
//     //     // withCredentials: false,
//     //     headers: headers
//     //     mode: 'no-cors' // 'cors' by default
//     // }
//     // )
//     //     .then(function (response) {
//     //         // console.log(response)
//     //         dispatch({
//     //             type: GET_QUIZZES,
//     //             payload: response.data,
//     //         })
//     //     })
//     //     .catch(
//     //         function (error) {
//     //             console.error(widgetUrl)
//     //             console.error(error);
//     //         }
//     //     );
// }

// axios.post(`${stagingUrl}/api/widgetsubmits/`,
//     {...JSON.stringify(formData)},
//     {headers: {'Content-Type': 'application/json'}}
// )
//     .catch(
//         function (error) {
//             console.log(error);
//         }
//     );

export const getRandomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min) + min)
}

export function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}