import axios from 'axios'

export async function verifyKhaltiPayment(pidx) {
  const headers = {
    'Authorization': `Key ${process.env.KHALTI_SECRET_KEY}`,
    'Content-Type': 'application/json',
  };

  const body = JSON.stringify({ pidx });

  const requestOptions = {
    url: `${process.env.KHALTI_GATEWAY_URL}/api/v2/epayment/lookup/`,
    method: 'POST',
    headers,
    data: body,
  };

  try {
    const response = await axios.request(requestOptions);
    return response.data;
  } catch (error) {
    console.error('Error verifying Khalti payment:', error);
    throw error;
  }
}

export async function initializeKhaltiPayment(details) {
  const headers = {
    'Authorization': `Key ${process.env.KHALTI_SECRET_KEY}`,
    'Content-Type': 'application/json',
  };

  const body = JSON.stringify(details);

  const requestOptions = {
    url: `${process.env.KHALTI_GATEWAY_URL}/api/v2/epayment/initiate/`,
    method: 'POST',
    headers,
    data: body,
  };

  try {
    const response = await axios.request(requestOptions);
    return response.data;
  } catch (error) {
    console.error('Error initializing Khalti payment:', error);
    throw error;
  }
}


