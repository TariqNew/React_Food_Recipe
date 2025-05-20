export default function ServiceCard({ Icon, title, description, iconColor }) {
  return (
    <article className="p-6 bg-black rounded-lg shadow hover:shadow-lg transition duration-300">
      <Icon className={`mx-auto w-12 h-12 mb-4 ${iconColor}`} aria-hidden="true" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </article>
  );
}
