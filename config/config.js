var config = {
	db: {
		host: '127.0.0.1',
		user: 'root',
		password: '211182',
		database: 'codejobs_node',
		port: 3306
	},
    site: {
    	url: 'http://localhost:3000',
    	title: 'CodeJobs'
    },
    server: {
    	environment: 'local',
    	debug: true
    }
};

exports.config = config;