require_relative 'piece'
require_relative 'slideable'
class Bishop < Piece
    include Slideable

    def initialize(color, board, pos)
        super(color, board, pos) 
    end

    def symbol
        case color 
        when 'black'
            return '♝'
        when 'white' 
            return '♗'
        end
    end

    def move_dirs
        diagonal_dirs
    end
    
end