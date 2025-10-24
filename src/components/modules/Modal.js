"use client"

function Modal({ children, setIsOpenModal }) {
  return (
    <div onClick={() => setIsOpenModal(false)} className="fixed inset-0 z-50 bg-stone-600/65 backdrop-blur-[1px] flex items-center justify-center">
      <div onClick={(e) => e.stopPropagation()} id="modal" className="bg-white rounded-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] lg:shadow-none w-[358px] lg:w-[561px] h-[362px] relative mx-3">
        {children}
      </div>
    </div>
  );
}
export default Modal;
