import notify from "gulp-notify";

export const errorHandler = title => {
	return {
		errorHandler: notify.onError({
			title: title || "Error",
			message: "<%= error.message %>",
		}),
	};
};
