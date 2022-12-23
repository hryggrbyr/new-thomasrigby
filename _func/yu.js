/* eslint-disable func-names */

exports.handler = async function (event, context) {
  const response = [];

  const { count } = event.queryStringParameters;

  const vouchers = {
    asos  : { y: 4000, s: 5    },
    amazon: { y: 2150, s: 2.50 },
    lewis : { y: 4130, s: 5    },
    argos : { y: 4090, s: 5    },
    tesco : { y: 2130, s: 2.50 },
    nike  : { y: 7750, s: 10   },
  };

  Object.keys(vouchers).forEach((company) => {
    const money = `£${(vouchers[company].s * Math.floor(count / vouchers[company].y)).toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    response.push(`💸  I have ${money} worth of ${company.toUpperCase()} vouchers!`)
  });

  return {
    statusCode: 200,
    body: JSON.stringify(response, null, 2),
    headers: {
      'access-control-allow-origin': '*',
    },
  };
};
