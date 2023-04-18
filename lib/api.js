import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://deft-gnome-afe72b.netlify.app/';

export async function getMenu() {
  const response = await axios.get(`${API_URL}/menu`);
  return response.data;
}

export async function getMenuItems() {
  const response = await axios.get(`${API_URL}/menu-items`);
  return response.data;
}

export async function getEvents() {
  const response = await axios.get(`${API_URL}/events`);
  return response.data;
}

export async function sendContactForm(data) {
  const response = await axios.post(`${API_URL}/contact`, data);
  return response.data;
}
