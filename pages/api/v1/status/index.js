function status(request, response) {
  response.status(200).json({ message: "Isso está funcionando?" });
}
export default status;
