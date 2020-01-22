const baseUrl = "https://api.github.com";

export const get = async url => {
    const response = await fetch(baseUrl + url);
    const responseJson = await response.json();

    return {
        statusCode: response.status,
        data: responseJson,
    };
};
