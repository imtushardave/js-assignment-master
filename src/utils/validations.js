const validateField = (param, errorMessage) => {
	if (!param) {
        const error = new Error(errorMessage);
        error.name = 'VALIDATION_ERROR'
		throw error;
	}
}

const validateAddNews = (params, body) => {
    const {title, description} = body;
    const newsType = params?.type;
    const id = params?.type;

    validateField(title, 'Missing required body parameter : title');
    validateField(description, 'Missing required body parameter : description');
    validateField(newsType, 'Missing required query parameter : type');
    validateField(id, 'Missing required query parameter : id');
}

module.exports = {
    validateField,
    validateAddNews
}

