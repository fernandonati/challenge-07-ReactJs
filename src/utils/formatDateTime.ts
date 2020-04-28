const formatDateTime = (value: Date): string => {
  return new Date(value).toLocaleDateString("pt-BR",{timeZone: 'UTC'});
}
export default formatDateTime;
