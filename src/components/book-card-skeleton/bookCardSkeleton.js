import "./styles.scss";

export default function BookCardSkeleton() {
  return (
    <div className="book-card-skeleton">
      <div className="book-card-skeleton__image"></div>
      <div className="book-card-skeleton__category"></div>
      <div className="book-card-skeleton__title"></div>
      <div className="book-card-skeleton__title"></div>
      <div className="book-card-skeleton__authors"></div>
    </div>
  );
}
