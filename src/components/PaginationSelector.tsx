import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const PaginationSelector = ({ page, pages, onPageChange}: Props) => {
  const pageNunbers = [];
  for (let i =1; i<= pages; i++) {
    pageNunbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        {page !== 1 && (
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={() => onPageChange(page - 1)} 
              />
            </PaginationItem>
        )}
        
        {pageNunbers.map((number) => (
            <PaginationItem>
              <PaginationLink 
                href="#" 
                onClick={() => onPageChange(number)}
                isActive={page === number}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
          {page !== pageNunbers.length && (
            <PaginationItem>
              <PaginationNext href="#" onClick={() => onPageChange(page + 1)} />
            </PaginationItem>
          )}
      </PaginationContent>
    </Pagination>
  )
}

PaginationSelector.propTypes = {}

export default PaginationSelector
